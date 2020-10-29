import 'package:flutter/material.dart';
import '../../../app/models/user.dart';
import '../../../app/services/firebase_auth_service.dart';

class TimeView extends StatelessWidget {
  TimeView({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
            child: Column(children: <Widget>[
      Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            timeOfDay.hour.toString() +
                ':' +
                timeOfDay.minute.toString() +
                '\n',
            style: Theme.of(context).textTheme.headline4,
          ))
    ])));
  }
}

var timeOfDay = TimeOfDay.now();
Stream<User> user = FirebaseAuthService().currentUser().asStream();
var name = user.first.then((value) => value.displayName);
