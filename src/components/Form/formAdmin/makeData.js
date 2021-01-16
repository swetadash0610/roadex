import namor from 'namor'
import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from "./ComplaintDetails"
const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

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

const newPerson = () => {

  const statusChance = Math.random()
  // const [x,setx]=useState(false);
  var x = false;
  const redirect =() =>{
    console.log("redirect");
    //  setx(true);
   }
  return {
    name: genName(),
    issue: genIssue(),
    votes: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    location:
      statusChance > 0.66
        ? 'NH'
        : statusChance > 0.33
        ? 'Local Streets'
        : 'Rural',
    details:<div >
              {
                  !x &&  
                  (<Dialog />)
              }
              {
                   x && (<div> 
                         hi 
                         </div>
                        ) 
              }
            </div>,    
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}