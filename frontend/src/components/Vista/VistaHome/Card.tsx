import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(40)
    }
  },
  blueCard: {
    backgroundImage: "linear-gradient(to bottom, #047257 50%, #061532 50%)",
    borderRadius: 25,
    maxWidth: 300
  },


  textStyle1: {
    color: "white",
    padding: 50,
    fontWeight: 600
  },
  textStyle2: {
    color: "white"
  }
}));

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.blueCard}>
        <CardContent>
          <div className={classes.textStyle1}>
            <Typography variant="h5" align="center">
              12:06 PM
            </Typography>

            <Typography variant="subtitle2" align="center">
              Thursday, April 4
            </Typography>
          </div>
          <br /> <br /> <br />
          <div className={classes.textStyle2}>
            <Typography variant="subtitle2" align="center">
              No upcoming events
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
