import React, {useState, useEffect} from 'react';
import IForm from './form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import "./Fstyle.css";
import Form2 from './formNew/Success';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

var issues_ar = [];
function mainForm() {
    const classes = useStyles();
    const baseUrl = "/get-all-complaints"
    const [clicked, setclicked] = useState(false);
    const [got, setgot ] = useState(true);   
    const [popform, setpopform] = useState(false); 

    const fetchcomplaints = e =>{
        const p = document.getElementById("pin").value;
        if( p !== "" ){
            axios.get(baseUrl+"?pin="+p)
                .then(res => {
                    issues_ar = [];
                    issues_ar = res.data;
                    setgot(true);
                })
                .catch( err => {
                    console.log(err);
                })
        }
        else{
            alert("Give a Valid pin");
        }
        setclicked(true);
        setgot(true);
    };

    const upvote = e => {
        console.log("upvote");
    };

    const popUpForm = e => {
        console.log("form");
        setpopform(true);
    };


    return (
        <div>
            <div className="head">
                HELP DESK
            </div>

            <h3 className="c-box">Complaint Box</h3>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="pin" label="PIN" />
            </form>

            <Button className="reg-btn" onClick={fetchcomplaints} variant="contained" color="primary"> Click to Register </Button>
            
            {
                got && (
                    <div className="complaint-outer" >
                        <b className="c-box">List of registered complaints</b>
                
                        <div className="comp-box" >
                            <div className="comp-inner-left">
                                <div className="txt-out"> <span className="txt-la">ID : </span> 123 </div>
                                <div className="txt-out"> <span className="txt-la">LOCATION : </span> 
                                    chor-bazar, chachu nagar
                                    </div>
                            </div>
                            <div className="comp-inner-right">
                                <button className="btn" onClick={upvote } >upvote</button>
                            </div>
                        </div>

                        <div className="comp-box" >
                            <div className="comp-inner-left">
                                <div className="txt-out"> <span className="txt-la">ID : </span> 123 </div>
                                <div className="txt-out"> <span className="txt-la">LOCATION : </span> 
                                    chor-bazar, chachu nagar
                                    </div>
                            </div>
                            <div className="comp-inner-right">
                                <button className="btn" onClick={upvote } >upvote</button>
                            </div>
                        </div>
                    
                        <Button className="reg-btn" onClick={popUpForm} variant="contained" color="primary"> New issue  </Button>
                    </div>
                )
            }

            {
                popform && (
                    <div>
                        <b>ok</b>
                        <Form2 />
                    </div>
                )
            }


            {/* <IForm /> */}
        </div>
    )
}

export default mainForm
