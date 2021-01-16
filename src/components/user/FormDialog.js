import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Location from "./Location"
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {storage} from "../../firebase/firebaseConfigs"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));

export default function FormDialog() {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [map, setMap] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getLocation = () => {
    setMap(true)
  };

//   FIle upload to firebase

  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const uploadTask = storage.ref(`/images/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("images")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
        });
    });
  }


  return (
    <div>
    <Button variant="contained" size="large" color="primary" onClick={handleClickOpen}>
      Register a complaint
      </Button>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Open an issue</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Please fill the following details
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Your Full Name"
            type="Name"
            variant="outlined"
            fullWidth
          />          
          <TextField
            multiline
            rows={2}
            margin="dense"
            id="name"
            label="Remarks"
            type="string"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" size="small" color="primary" onClick={getLocation}>
            Get Location
          </Button>
          { map ? <Location /> : null }

            {/* Upload Button */}
            <div>
            <form onSubmit={handleUpload}>
                <input required accept="image/*" onChange={handleChange} className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
                </label>
                <button disabled={!file}>upload to firebase</button>
            </form>
            <img src={url} alt="" />
            </div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Link to='/success'>
          <Button onClick={handleClose} color="primary">
                Submit
              </Button>
      </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
