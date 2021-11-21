import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:'transparent',
    borderRadius:'5%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Here is your daily briefing:
        </Typography>
        <Typography variant="h5" component="h2">
          12:33pm
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          on call
        </Typography>
        <Typography variant="body2" component="p">
          Complete the task that you had
          <br />
          Then proceed with the following task
          <br />
          Then you have to do this one more
          <br />
          one more task just because
          <br />
          uno mas
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
