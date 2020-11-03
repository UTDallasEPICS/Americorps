import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import '../time/time_view.dart';
import 'package:provider/provider.dart';
import '../../../app/constants/strings.dart';
import '../../../app/services/firebase_auth_service.dart';
import 'package:flutter_web_firebase_googe_auth/size_config.dart';

String name = '';
final FirebaseAuth _auth = FirebaseAuth.instance;
getCurrentUserName() async {
  final user = await _auth.currentUser();
  if (user.isAnonymous) {
    name = 'Guest';
  } else {
    name = user.displayName;
  }
}

class HomeView extends StatelessWidget {
  const HomeView({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    // variable size
    Size size = MediaQuery.of(context).size;

    getCurrentUserName();
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
                          '\t\tHome Page \n Welcome to Americorps VISTA',
                          style: Theme.of(context).textTheme.headline4,
                        ),
                      ),
                      const Spacer(),
                      // CategoryCard(),
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
              ),
            ),
          ],
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
              padding: EdgeInsets.all(getProportionateScreenWidth(15)),
              height: getProportionateScreenWidth(55),
              width: getProportionateScreenWidth(55),
              decoration: BoxDecoration(
                color: Color(0xFFFFECDF),
                borderRadius: BorderRadius.circular(10),
              ),
            ),
            SizedBox(height: 5),
            Text(text, textAlign: TextAlign.center)
          ],
        ),
      ),
    );
  }
}
