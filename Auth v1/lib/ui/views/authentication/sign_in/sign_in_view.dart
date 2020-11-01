import 'package:flutter/material.dart';
import 'package:flutter_web_firebase_googe_auth/ui/views/authentication/sign_in/background_painter.dart';
import 'package:provider/provider.dart';

import '../../../../app/constants/strings.dart';
import 'sign_in_view_model.dart';
import 'widgets/anonymous_sign_in_button.dart';
import 'widgets/google_sign_in_button.dart';

class SignInView extends StatelessWidget {
  const SignInView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider<SignInViewModel>(
      create: (_) => SignInViewModel(context.read),
      builder: (_, child) {
        return const Scaffold(
          body: SignInViewBody._(),
        );
      },
    );
  }
}

class SignInViewBody extends StatelessWidget {
  const SignInViewBody._({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isLoading =
        context.select((SignInViewModel viewModel) => viewModel.isLoading);
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        children: <Widget>[
          
          // This is for adding in a custom background
          Center (    
              child: CustomPaint (
              painter: BackgroundPainter(),
            ),
          ),

          Padding(
            padding: const EdgeInsets.all(16),
            child: Text(
              "Please Sign In Below.",
              style: Theme.of(context).textTheme.headline4, 

            ),
          ),
          
          Expanded(
            child: isLoading ? _loadingIndicator() : _signInButtons(context),
          ),
          
        ],
      ),
    );
  }

  Center _loadingIndicator() {
    return const Center(
      child: CircularProgressIndicator(),
    );
  }

  Column _signInButtons(BuildContext context) {
    return Column(
      children: <Widget>[
        const Spacer(),
        const AnonymousSignInButton(),
        const GoogleSignInButton(),
        const Spacer(),
      ],
    );
  }
}
