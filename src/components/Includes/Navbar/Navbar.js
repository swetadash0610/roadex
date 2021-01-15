import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AcUnitIcon from '@material-ui/icons/AcUnit';

import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '10vh'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"left"
  },
  navbar:{
    background: 'linear-gradient(to right top, #061227, #22283c, #3d4051, #595a68, #757580)',
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <AcUnitIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Roadex
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="secondary">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
