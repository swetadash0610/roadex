import namor from 'namor'
import React,{ useState } from 'react'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {

  const statusChance = Math.random()
  // const [x,setx]=useState(false);
  var x = false;
  const redirect =() =>{
    console.log("redirect");
    //  setx(true);
   }
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    issue: namor.generate({ words: 1, numbers: 0 }),
    /*age: Math.floor(Math.random() * 30),*/
    votes: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    location:
      statusChance > 0.66
        ? 'NH'
        : statusChance > 0.33
        ? 'local muncipal'
        : 'other',
    details:<div >
              {
                  !x &&  
                  (<Button  onClick={redirect}>Click</Button>)
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