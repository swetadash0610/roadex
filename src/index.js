import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import reportWebVitals from './reportWebVitals';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
  apiKey: "AIzaSyDWAOHIH1SZhV_Jpb24DuJKSWvIV5pFloU",
  authDomain: "roadex-4d93e.firebaseapp.com",
  databaseURL: "https://roadex-4d93e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roadex-4d93e",
  storageBucket: "roadex-4d93e.appspot.com",
  messagingSenderId: "1072621412763",
  appId: "1:1072621412763:web:1d43b9e96c4e789068413e",
  measurementId: "G-LG98PCB2EP"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
