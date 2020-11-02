import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../ui/views/authentication/sign_in/sign_in_view.dart';
import '../ui/views/home/home_view.dart';
import 'models/user.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Home',
      theme: ThemeData(
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: Consumer<User>(
        builder: (_, user, __) {
          if (user == null) {
            return const SignInView();
          } else {
            return const HomeView();
          }
        },
      ),
    );
  }
}

// STUFF I CANNOT FIGURE OUT AT ATM - JOHN
// class Consumer<User> extends StatefulWidget {
//   @override
//   _HomePageState createState() => _HomePageState();
// }

// class _HomePageState extends State<Consumer<User>> {
//   @override
//   Widget build(BuildContext context) {
//     return LayoutBuilder(
//       builder: (_, user, __) {
//           if (user == null) {
//             return const SignInView();
//           } else {
//             return const HomeView();
//           }
//         }
  
//   }
//   @override
//   Widget build(BuildContext context) {
//     var screenSize = MediaQuery.of(context).size;
//     return Scaffold();
//   }
// }
