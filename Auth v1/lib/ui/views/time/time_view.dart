import 'dart:async';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../authentication/sign_in/sign_in_view.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

var timeOfDay = TimeOfDay.now();
TextEditingController timeController = TextEditingController();
final dbRef = Firestore.instance;
var addedTime = 0.0, prevTime = 0.0;

void getPrevTime() async {
  try {
    //TODO: DO NOT USE NAME HERE, use userid or firebase id or whatever, cause names are not unique.
    // that means the name of the list in firebase itself needs to be the userid itself, not the name as it currently is
    await dbRef.collection('users').document(name).get().then((value) {
      prevTime = value.data['TimeLog'];
    });
  } catch (e) {
    print(e.toString());
  }
}

class TimeView extends StatefulWidget {
  TimeView({Key key}) : super(key: key);
  @override
  _TimeViewState createState() => _TimeViewState();
}

class _TimeViewState extends State<TimeView> {
  String _timeString = '';
  var timer;

  @override
  void initState() {
    super.initState();
    changeText();
    // to update time every second
    timer = Timer.periodic(
        const Duration(seconds: 1), (Timer t) => _getCurrentTime());
  }

  @override
  void dispose() {
    // if not disposed, keeps giving error every second as timer keeps running
    timer.cancel();
    super.dispose();
  }

  void _getCurrentTime() {
    setState(() {
      // if time was 1:01 am, it used to show it as 1:1, so we have to manually add zero for single digit time
      String second = (DateTime.now().second).toString();
      if (second.length == 1) {
        second = '0' + second;
      }
      String minute = (DateTime.now().minute).toString();
      if (minute.length == 1) {
        minute = '0' + minute;
      }
      String hour = (DateTime.now().hour).toString();
      if (hour.length == 1) {
        hour = '0' + hour;
      }
      _timeString = '${hour}:${minute}:${second}';
    });
    //print(_timeString);
  }

  String timeLogText = 'Your total time logged is ' + (prevTime).toString();
  void changeText() async {
    await getPrevTime();
    setState(() {
      timeLogText = 'Your total time logged is ' + (prevTime).toString();
    });
  }

  @override
  Widget build(BuildContext context) {
    //getCurrentUserName();
    return Scaffold(
        body: Center(
            child: Column(children: [
      Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            'User: ' + name + '\n' + _timeString,
            style: Theme.of(context).textTheme.headline4,
          )),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(40, 10, 40, 10),
              child: TextFormField(
                controller: timeController,
                autofocus: false,
                style: const TextStyle(fontFamily: 'OverpassRegular'),
                decoration: InputDecoration(
                  labelText: 'Enter hours',
                  focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(5),
                      borderSide:
                          const BorderSide(width: 0.5, color: Colors.black)),
                ),
              ),
            ),
          ),
          Expanded(
              child: Padding(
            padding: const EdgeInsets.fromLTRB(40, 20, 400, 10),
            child: RaisedButton(
                onPressed: () async {
                  addedTime = double.parse(timeController.text);
                  try {
                    await getPrevTime();
                    await dbRef
                        .collection('users')
                        .document(name)
                        .updateData({'TimeLog': prevTime + addedTime});
                    //TODO: just remove all print() statements cause they wont be needed in final release
                    print('New Time: ' + (prevTime + addedTime).toString());
                  } catch (e) {
                    print(e.toString());
                    // handle errors
                  }
                  changeText();
                  timeController.clear();
                },
                padding:
                    const EdgeInsets.symmetric(horizontal: 15, vertical: 15),
                child: const Text(
                  'Submit',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontFamily: 'OverpassRegular',
                    fontSize: 16,
                  ),
                )),
          )),
        ],
      ),
      Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            '$timeLogText',
            style: TextStyle(
              fontFamily: 'OverpassRegular',
            ),
          )),
      Padding(
        padding: const EdgeInsets.fromLTRB(8, 40, 8, 8),
        child: RaisedButton(
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
      ),
    ])));
  }
}
