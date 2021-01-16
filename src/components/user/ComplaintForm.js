import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import ComplaintsTable from "./ComplaintsTable"
import FormDialog from "./FormDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      textAlign:"center",
    },
  },
}));

export default function ComplaintForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormDialog />  
      <h3>Existing Complaints</h3>
      <ComplaintsTable />
    </div>
  );
}
