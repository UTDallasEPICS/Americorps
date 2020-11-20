import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../../../../../app/app.dart';
import '../sign_in_view.dart';
import 'package:provider/provider.dart';

import '../../../../../app/constants/strings.dart';
import '../sign_in_view_model.dart';

class EmailSignInButton extends StatelessWidget {
  const EmailSignInButton({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return RaisedButton(
      onPressed: () async {
        String e = emailController.text;
        String p = passwordController.text;
        if (e == 'anon' || e.isEmpty) {
          await context.read<SignInViewModel>().signInAnonymously();
        } else {
          await context.read<SignInViewModel>().signInWithEmailPassword(e, p);
          if (loginBool) {
            return showDialog(
              context: scaffoldKey.currentContext,
              builder: (dialogContext) {
                Future.delayed(const Duration(seconds: 1)).then((_) {
                  Navigator.of(dialogContext).pop();
                });
                return const AlertDialog(
                  content: Text(
                    'Invalid Credentials',
                    style: TextStyle(
                        fontFamily: 'OverpassRegular', color: Colors.red),
                  ),
                  backgroundColor: Colors.white60,
                );
              },
            );
          }
        }
      },
      padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
      color: const Color.fromRGBO(66, 133, 244, 1),
      child: const Text(
        Strings.emailSignIn,
        textAlign: TextAlign.center,
        style: TextStyle(
          fontFamily: 'OverpassRegular',
          fontSize: 16,
          color: Colors.white,
        ),
      ),
    );
  }
}
