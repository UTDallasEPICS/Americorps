import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../authentication/sign_in/sign_in_view.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

var timeOfDay = TimeOfDay.now();
TextEditingController timeController = TextEditingController();
final dbRef = Firestore.instance;
var addedTime = 0.0, prevTime = 0.0;

void getPrevTime() async {
  try {
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
  String timeLogText = 'Your total time logged is ' + (prevTime).toString();
  void changeText() async {
    await getPrevTime();
    setState(() {
      timeLogText = 'Your total time logged is ' + (prevTime).toString();
    });
  }

  String hr = timeOfDay.hour.toString();
  String min = timeOfDay.minute.toString();

  @override
  Widget build(BuildContext context) {
    //getCurrentUserName();
    return Scaffold(
        body: Center(
            child: Column(children: [
      Padding(
          padding: const EdgeInsets.all(16),
          child: Text(
            'The time is now ' + hr + ':' + min + ', ' + name,
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
                    print('New Time: ' + (prevTime + addedTime).toString());
                  } catch (e) {
                    print(e.toString());
                    // handle errors
                  }
                  changeText();
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
