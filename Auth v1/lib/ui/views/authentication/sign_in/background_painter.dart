import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/painting.dart';

// created this class to create background

class BackgroundPainter extends CustomPainter {
  BackgroundPainter()
      : bluePaint = Paint()
          ..color = Palette.vistaBlue
          ..style = PaintingStyle.fill,
        greyPaint = Paint()
          ..color = Palette.lightBlue
          ..style = PaintingStyle.fill,
        orangePaint = Paint()
          ..color = Palette.orange
          ..style = PaintingStyle.fill;

  final Paint bluePaint;
  final Paint greyPaint;
  final Paint orangePaint;

  @override
  void paint(Canvas canvas, Size size) {
    print('painting');
    paintBlue(canvas, size);
  }

  void paintBlue(Canvas canvas, Size size) {
    final path = Path();
    @override
    Widget build(BuildContext context) {
      var screenSize = MediaQuery.of(context).size;
      path.moveTo(screenSize.width, screenSize.height / 2);
      path.lineTo(screenSize.width, 0);
      path.lineTo(0, 0);
      path.close();

      canvas.drawPath(path, bluePaint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}

class Palette {
  static const Color vistaBlue = Color.fromARGB(255, 90, 126, 184);
  static const Color lightBlue = Color(0xff489FB5);
  static const Color orange = Color(0xffFFA62B);
  static const Color darkOrange = Color(0xffCC9900);
}
