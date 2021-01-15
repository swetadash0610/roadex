import React, {useState, useEffect} from 'react';
import Login from './Login';
import Signup from './Signup';
import Firebase from '../../Firebase';

export default function Auth() {
 const [user, setUser] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [hasAccount, setHasAccount] = useState(false);

 const handleLogin = () => {
  Firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch((err) => {
   switch(err.code) {
    case "auth/invalid-email":
     case "auth/user-disabled":
      case "auth/user-not-found":
       setEmailError()
   }
  })
 }
 
 return(
  <Login />
 )
}