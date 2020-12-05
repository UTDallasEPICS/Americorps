// To sign the user in
// Remove the anonymous sign in ability for final release

import 'package:firebase_auth/firebase_auth.dart';
import '../../ui/views/authentication/sign_in/sign_in_view.dart';
import 'package:google_sign_in/google_sign_in.dart';

import '../app.dart';
import '../models/user.dart';

class FirebaseAuthService {
  final FirebaseAuth _firebaseAuth;
  final GoogleSignIn _googleSignIn;

  FirebaseAuthService({FirebaseAuth firebaseAuth, GoogleSignIn googleSignin})
      : _firebaseAuth = firebaseAuth ?? FirebaseAuth.instance,
        _googleSignIn = googleSignin ?? GoogleSignIn();

  User _userFromFirebase(FirebaseUser user) {
    getCurrentUserName();
    if (user == null) {
      return null;
    }
    return User(
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoUrl,
    );
  }

  Stream<User> get onAuthStateChanged {
    return _firebaseAuth.onAuthStateChanged.map(_userFromFirebase);
  }

  //TODO: remove this for final release
  Future<User> signInAnonymously() async {
    final authResult = await _firebaseAuth.signInAnonymously();
    return _userFromFirebase(authResult.user);
  }

  Future<User> signInWithEmailPassword(String _email, String _password) async {
    try {
      final authResult = await _firebaseAuth.signInWithEmailAndPassword(
          email: _email, password: _password);
      invalidLogin = false;
      UserUpdateInfo updateInfo = UserUpdateInfo();
      updateInfo.displayName = _email;
      authResult.user.updateProfile(updateInfo);
      return _userFromFirebase(authResult.user);
    } on Error catch (err) {
      print(err);
      invalidLogin = true;
      return null;
    }
  }

// To create a new account. Maybe only give the admin access to this
  Future<User> createWithEmailPassword(String _email, String _password) async {
    final authResult = await _firebaseAuth.createUserWithEmailAndPassword(
        email: _email, password: _password);
    return _userFromFirebase(authResult.user);
  }

  Future<User> signInWithGoogle() async {
    final googleUser = await _googleSignIn.signIn();
    final googleAuth = await googleUser.authentication;
    final credential = GoogleAuthProvider.getCredential(
      accessToken: googleAuth.accessToken,
      idToken: googleAuth.idToken,
    );
    final authResult = await _firebaseAuth.signInWithCredential(credential);
    return _userFromFirebase(authResult.user);
  }

  Future<void> signOut() async {
    return _firebaseAuth.signOut();
  }

  Future<User> currentUser() async {
    final user = await _firebaseAuth.currentUser();
    return _userFromFirebase(user);
  }
}
