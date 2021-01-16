import firebase from 'firebase/app' // doing import firebase from 'firebase' or import * as firebase from firebase is not good practice.
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore';
import 'firebase/storage'

// Initialize Firebase
let config = {
  apiKey: "AIzaSyDWAOHIH1SZhV_Jpb24DuJKSWvIV5pFloU",
  authDomain: "roadex-4d93e.firebaseapp.com",
  databaseURL: "https://roadex-4d93e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "roadex-4d93e",
  storageBucket: "roadex-4d93e.appspot.com",
  messagingSenderId: "1072621412763",
  appId: "1:1072621412763:web:1d43b9e96c4e789068413e",
  measurementId: "G-LG98PCB2EP"
}

firebase.initializeApp(config)
const storage = firebase.storage()
const db = firebase.firestore();

export  {
  storage,db, firebase as default
}