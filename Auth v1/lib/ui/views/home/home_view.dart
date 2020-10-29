import 'package:flutter/material.dart';
import '../time/time_view.dart';
import 'package:provider/provider.dart';
import '../../../app/constants/strings.dart';
import '../../../app/services/firebase_auth_service.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(16),
              child: Text(
                '\t\tHome Page \n Welcome to Americorps VISTA',
                style: Theme.of(context).textTheme.headline4,
              ),
            ),
            const Spacer(),
            RaisedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => TimeView()),
                );
              },
              child: const Text(Strings.time),
            ),
            const Spacer(),
            RaisedButton(
              onPressed: () {
                context.read<FirebaseAuthService>().signOut();
              },
              child: const Text(Strings.signOut),
            ),
            const Spacer(),
          ],
        ),
      ),
    );
  }
}
