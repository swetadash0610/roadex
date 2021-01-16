import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import ComplaintsTable from "./ComplaintsTable"
import Nav from '../Includes/Navbar/Navbar'
import Foot from '../Includes/Footer/Footer'
import FormDialog from "./FormDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      textAlign:"center",
    },
  },
}));

export default function ComplaintForm({handleLogout}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Nav handleLogout={handleLogout} />
      <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <FormDialog />
      </div>  
      <h3 style={{marginTop: '2rem', marginBottom: '2rem'}}>Existing Complaints</h3>
      <ComplaintsTable />
      <Foot />
    </div>
  );
}

