 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyC-0sIZBfr0knPhMunQ90zkbtViF55OPuA",
  authDomain: "student-977f0.firebaseapp.com",
  databaseURL: "https://student-977f0-default-rtdb.firebaseio.com",
  projectId: "student-977f0",
  storageBucket: "student-977f0.appspot.com",
  messagingSenderId: "911267131315",
  appId: "1:911267131315:web:9392e4808315eddf2e65c6"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  