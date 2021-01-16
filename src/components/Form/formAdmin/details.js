import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

var issue_details = { "issue" : "", "location" : "" };
export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(true);
    const [iid, setiid] = React.useState(props.id);
    const [chked, setchked] = React.useState([false, false, false]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      axios.get("url/"+iid)
        .then( res => {
            // assign issue_details to res.data
        })
        .catch( er => {
            console.log("error");
        })
  }, []);

  const handleChange = (event) => {
    // setValue(event.target.value);
  };

  const checkit = (e) => {
      if(e.target.value === "other"){
          setchked([false, false, true]);
      }
      else if(e.target.value === "local"){
        setchked([false, true, false]);
    } 
    else if(e.target.value === "nh"){
        setchked([true, false, false]);
    }
  }


  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Check Issue"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Issue - Location - Seriousness
          </DialogContentText>
        </DialogContent>

        <DialogActions>

        <FormControl component="fieldset">
        <FormLabel component="legend">Agency</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={"value"} onChange={handleChange}>
            <FormControlLabel checked={chked[0]} id="nh" onChange={checkit} value="nh" control={<Radio />} label="NHAI" />
            <FormControlLabel checked={chked[1]} id="local" onChange={checkit} value="local" control={<Radio />} label="Local Construction" />
            <FormControlLabel checked={chked[2]} id="others" onChange={checkit} value="other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>
    
          <Button variant="contained" onClick={handleClose} color="primary">
            Forward
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
