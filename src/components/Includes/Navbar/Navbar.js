import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {Link} from 'react-router-dom'

import "./Navbar.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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

export default function Navbar({handleLogout}) {
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
          <Link to='/'>
          <Button color="inherit" onClick={handleLogout}>LOGOUT</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
