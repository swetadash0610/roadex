import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    minWidth: 27,
    width: '300px',
    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
  btn: {
      textAlign: "center",
      justifyContent: "center",
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const {text , status} = props;
  if(status === "user") localStorage.setItem("status", "user");
  else localStorage.setItem("status", "admin");

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>----------</b>
        </Typography>
        <Typography variant="h5" component="h2">
          {text}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <b>----------</b>
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions className={classes.btn}>
      <Link to='/auth'>
        <Button size="small" variant='contained' color="primary" >LOGIN</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
