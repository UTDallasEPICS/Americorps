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
    return Scaffold(
      backgroundColor: Colors.blue[50],
      body: Padding(
        padding:
            EdgeInsets.only(top: 60.0, bottom: 60.0, left: 120.0, right: 120.0),
        child: Card(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(30.0)),
          elevation: 5.0,
          child: Container(
            width: MediaQuery.of(context).size.width / 3.3,
            height: MediaQuery.of(context).size.width / 3.3,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              mainAxisSize: MainAxisSize.max,
              children: <Widget>[
                // // This is for adding in a custom background
                // Center(
                //   child: CustomPaint(
                //     painter: BackgroundPainter(),
                //   ),
                // ),

                Padding(
                  padding: const EdgeInsets.all(16), 
                  child: Container (
                  height: MediaQuery.of(context).size.height / 10,
                  width: MediaQuery.of(context).size.width / 10,
                  child: Image.network(
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/AmeriCorps_VISTA_%28Volunteers_in_Service_to_America%29_Logo.svg/1200px-AmeriCorps_VISTA_%28Volunteers_in_Service_to_America%29_Logo.svg.png',
                  ),
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
                  child:
                      isLoading ? _loadingIndicator() : _signInButtons(context),
                ),
              ],
            ),
          ),
        ),
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
