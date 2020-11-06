import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_web_firebase_googe_auth/app/services/firebase_auth_service.dart';
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
      onPressed: () {
        if (emailController.text == 'anon' || emailController.text.isEmpty) {
          context.read<SignInViewModel>().signInAnonymously();
        } else {
          // context.read<SignInViewModel>().signInWithEmailPassword(
          //     emailController.text, passwordController.text);
          return showDialog(
            context: context,
            builder: (context) {
              return AlertDialog(
                  content: Text(
                emailController.text,
                style: const TextStyle(fontFamily: 'OverpassRegular'),
              ));
            },
          );
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
