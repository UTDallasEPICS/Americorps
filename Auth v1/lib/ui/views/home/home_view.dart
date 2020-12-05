import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../authentication/sign_in/sign_in_view.dart';
import '../time/time_view.dart';
import 'package:provider/provider.dart';
import '../../../app/constants/strings.dart';
import '../../../app/services/firebase_auth_service.dart';
import '../../../size_config.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // variable size
    Size size = MediaQuery.of(context).size;
    SizeConfig().init(context);

//    getCurrentUserName();
    return Scaffold(
      backgroundColor: Colors.blue[200],
      body: Center(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(16),
              child: Card(
                shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30.0)),
                elevation: 5.0,
                child: Container(
                  width: size.width,
                  height: size.height * .9,
                  child: Column(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.all(20),
                        child: Text(
                          'Home Page\nWelcome to Americorps VISTA\n' + name,
                          style: Theme.of(context).textTheme.headline4,
                          textAlign: TextAlign.center,
                        ),
                      ),
                      const Spacer(),
                      Categories(),
                      RaisedButton(
                          onPressed: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => TimeView()),
                            );
                          },
                          padding: const EdgeInsets.symmetric(
                              horizontal: 15, vertical: 15),
                          color: Colors.blue,
                          child: const Text(
                            Strings.time,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: 'OverpassRegular',
                              fontSize: 16,
                              color: Colors.white,
                            ),
                          )),
                      const Spacer(),
                      RaisedButton(
                          onPressed: () {
                            context.read<FirebaseAuthService>().signOut();
                          },
                          padding: const EdgeInsets.symmetric(
                              horizontal: 15, vertical: 15),
                          color: Colors.blue,
                          child: const Text(
                            Strings.signOut,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontFamily: 'OverpassRegular',
                              fontSize: 16,
                              color: Colors.white,
                            ),
                          )),
                      const Spacer(),
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
}

class Categories extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // find a way to add functions, by writing 'press': .....
    List<Map<String, dynamic>> categories = [
      {'icon': 'icons8-time-48.png', 'text': 'Time'},
      {'icon': 'icons8-schedule-48.png', 'text': 'View Hours'},
      {'icon': 'icons8-room-finder-48.png', 'text': 'Schedule'},
      {'icon': 'icons8-settings-48.png', 'text': 'Settings'},
      {'icon': 'icons8-shutdown-48.png', 'text': 'Logout'},
    ];

    return Padding(
      padding: EdgeInsets.all(getProportionateScreenWidth(20)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: List.generate(
          categories.length,
          (index) => CategoryCard(
              icon: categories[index]['icon'],
              text: categories[index]['text'],
              press: () {
                // should be just " 'press ' " and the value of that should be in table above
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => TimeView()));
              }),
        ),
      ),
    );
  }
}

class CategoryCard extends StatelessWidget {
  const CategoryCard({
    Key key,
    @required this.icon,
    @required this.text,
    @required this.press,
  }) : super(key: key);

  final String icon, text;
  final GestureTapCallback press;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: press,
      child: SizedBox(
        width: getProportionateScreenWidth(55),
        child: Column(
          children: [
            Container(
              padding: EdgeInsets.all(getProportionateScreenWidth(5)),
              height: getProportionateScreenWidth(25),
              width: getProportionateScreenWidth(25),
              decoration: BoxDecoration(
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.8),
                    spreadRadius: 1,
                    blurRadius: 3,
                    offset: Offset(2, 3), // changes position of shadow
                  ),
                ],
                color: const Color(0xFFFFECDF),
                borderRadius: BorderRadius.circular(10),
              ),
              child: Image.asset(icon),
            ),
            const SizedBox(height: 3),
            Text(
              text,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontFamily: 'OverpassRegular',
              ),
            )
          ],
        ),
      ),
    );
  }
}

// class IconButtons extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Center(
//         child: IconButton(
//       icon: const AssetImage('assets/icons8-clock.svg') as Widget,
//       onPressed: () {
//         Navigator.push(
//           context,
//           MaterialPageRoute(builder: (context) => TimeView()),
//         );
//       },
//     ));
//   }
// }
