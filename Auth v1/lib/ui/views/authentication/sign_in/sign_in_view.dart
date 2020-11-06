import 'dart:ui';

import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'widgets/email_password_sign_in_button.dart';
import 'package:provider/provider.dart';

import 'sign_in_view_model.dart';
//import 'widgets/anonymous_sign_in_button.dart';
import 'widgets/google_sign_in_button.dart';

String name = '';
final FirebaseAuth _auth = FirebaseAuth.instance;
void getCurrentUserName() async {
  final user = await _auth.currentUser();
  if (user.isAnonymous) {
    name = 'Guest';
  } else {
    name = user.displayName;
  }
}

final emailController = TextEditingController();
final passwordController = TextEditingController();

class SignInView extends StatefulWidget {
  const SignInView({Key key}) : super(key: key);

  @override
  _SignInViewState createState() => _SignInViewState();
}

class _SignInViewState extends State<SignInView> {
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

class SignInViewBody extends StatefulWidget {
  const SignInViewBody._({Key key}) : super(key: key);

  @override
  _SignInViewBodyState createState() => _SignInViewBodyState();
}

class _SignInViewBodyState extends State<SignInViewBody> {
  bool _showPassword = false;

  @override
  void dispose() {
    // Clean up the controller when the widget is disposed.
    // emailController.dispose();
    // passwordController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isLoading =
        context.select((SignInViewModel viewModel) => viewModel.isLoading);
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
        child: Stack(
          children: [
            // Half blue half white background
            Row(
              children: [
                Container(
                  height: double.infinity,
                  width: size.width / 2,
                  color: Colors.blue[200],
                ),
                Container(
                  height: double.infinity,
                  width: size.width / 2,
                  color: Colors.white,
                ),
              ],
            ),

            // Copyright icon
            Align(
              alignment: Alignment.bottomRight,
              child: Padding(
                padding: const EdgeInsets.all(32),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    const Icon(
                      Icons.copyright,
                      color: Colors.grey,
                      size: 28,
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    const Text(
                      'COPYRIGHT 2020',
                      style: TextStyle(
                        color: Colors.grey,
                        fontSize: 14,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Login Box
            Center(
              child: Card(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30.0)),
                elevation: 5.0,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  width: size.width / 3.3,
                  height: size.height *
                      (size.height > 770
                          ? 0.7
                          : size.height > 670
                              ? 0.8
                              : 0.8),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    mainAxisSize: MainAxisSize.max,
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(20),
                        child: Container(
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
                          'LOG IN',
                          style: TextStyle(
                            color: Colors.grey[500],
                            fontSize: 20,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      Container(
                        width: 30,
                        child: const Divider(
                          color: Colors.grey,
                          thickness: 2,
                        ),
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      Padding(
                        padding: EdgeInsets.fromLTRB(40, 10, 40, 10),
                        child: TextFormField(
                          style: TextStyle(fontFamily: 'OverpassRegular'),
                          decoration: InputDecoration(
                            labelText: 'Email',
                            suffixIcon: const Icon(
                              Icons.mail_outline,
                            ),
                            focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: const BorderSide(
                                    width: 2.5, color: Colors.blue)),
                          ),
                          controller: emailController,
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(40, 20, 40, 10),
                        child: TextFormField(
                          style: const TextStyle(fontFamily: 'OverpassRegular'),
                          obscureText: !_showPassword,
                          decoration: InputDecoration(
                            labelText: 'Password',
                            suffixIcon: IconButton(
                              icon: Icon(
                                _showPassword
                                    ? Icons.visibility
                                    : Icons.visibility_off,
                              ),
                              onPressed: () {
                                setState(() => _showPassword = !_showPassword);
                              },
                            ),
                            focusedBorder: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(15),
                                borderSide: const BorderSide(
                                    width: 2.5, color: Colors.blue)),
                          ),
                          controller: passwordController,
                        ),
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                      Expanded(
                        child: isLoading
                            ? _loadingIndicator()
                            : _signInButtons(context),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
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
        //const Spacer(),
        //const AnonymousSignInButton(),
        const EmailSignInButton(),
        Padding(
          padding: const EdgeInsets.all(10),
          child: Text(
            'OR',
            style: TextStyle(
              color: Colors.grey[500],
              fontSize: 20,
              fontWeight: FontWeight.w500,
            ),
          ),
        ),
        // const Spacer(),
        const GoogleSignInButton(),
        const Spacer(),
      ],
    );
  }
}
