import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import img from "../../../images/img1.jpeg"
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const genIssue = () =>{
    var issue_list = [
      "Broken road", "Mud holes", "Busy area needed speed breakers", "Uneven Road", "Crumbling edges"
    ];
    var l = issue_list.length;
    var i = Math.floor( (Math.random() * 10) % l );
    return issue_list[i];
  
  };
  
  const genName = () =>{
    var name_list = [
      "Pratyush Swain", "Pritish Samal", "Sweta Dash", "Devidutta Nayak", "John Cena", "Shivansu Sahoo",
      "Om Agrawal", "Rishab Panda", "Kanha Jain", "Satty Piya", "Sibasins Ray", "Jemma Jena", "Aditya Patra",
      "Pratyush Lenka", "Roshan Sahoo", "Bapu Boi", "Ramlu Lal"
    ];
    var l = name_list.length;
    var i = Math.floor( (Math.random() * 10) % l);
    return name_list[i];
  };

  const genLoc = () =>{
    var loc_list = [
      "NH", "Local Streets", "Rural"
    ];
    var l = loc_list.length;
    var i = Math.floor( (Math.random() * 10) % l);
    return loc_list[i];
  };
  
  const row={
    name: genName(),
    remarks: genIssue(),
    location:genLoc(),
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Click
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Information</DialogTitle>
        <DialogContent>
         <h5>Name: {row.name}</h5>
         <h5>Remarks:{row.remarks} </h5>
         <h5>Location: {row.location}</h5>
         <h5>Images: </h5>   
         <img width="200" src={img} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Forward
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}