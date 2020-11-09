import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../authentication/sign_in/sign_in_view.dart';

var timeOfDay = TimeOfDay.now();

class TimeView extends StatelessWidget {
  TimeView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    //getCurrentUserName();
    return Scaffold(
        body: Center(
            child: Column(children: <Widget>[
      Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            'The time is now ' +
                timeOfDay.hour.toString() +
                ':' +
                timeOfDay.minute.toString() +
                ', ' +
                name,
            style: Theme.of(context).textTheme.headline4,
          )),
      RaisedButton(
        onPressed: () {
          Navigator.pop(context);
        },
        padding: const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
        color: const Color.fromRGBO(66, 133, 244, 1),
        child: const Text(
          'Back',
          textAlign: TextAlign.center,
          style: TextStyle(
            fontFamily: 'OverpassRegular',
            fontSize: 16,
            color: Colors.white,
          ),
        ),
      ),
    ])));
  }
}
