import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
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
        String e = emailController.text;
        String p = passwordController.text;
        if (e == 'anon' || e.isEmpty) {
          context.read<SignInViewModel>().signInAnonymously();
        } else {
          context.read<SignInViewModel>().signInWithEmailPassword(e, p);
          // return showDialog(
          //   context: context,
          //   builder: (context) {
          //     return AlertDialog(
          //         content: Text(
          //       e,
          //       style: const TextStyle(fontFamily: 'OverpassRegular'),
          //     ));
          // },
          //);
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
