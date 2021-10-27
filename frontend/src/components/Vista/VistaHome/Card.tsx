import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.css';

export default function SimpleCard() {
  return (
    <Card className={styles.root}>
      <CardContent >
        <div className={styles.main}>
          <Typography className={styles.title} gutterBottom>
            Here is your upcoming event:
          </Typography>
          <Typography variant="h5" component="h2">
            12:33pm
          </Typography>
          <Typography className={styles.pos}>
            on call
          </Typography>
        </div>
        <div className={styles.events}>
          <Typography className={styles.events}>
            No upcoming events
          </Typography>
        </div>
      </CardContent>
      <CardActions className={styles.learnMore} >
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
