
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//     // Your credentials
//     apiKey: "AIzaSyBsBQGgRHEBszIBSg9td6OXu9_dSX0F5-w",
//     authDomain: "friska-production.firebaseapp.com",
//     databaseURL: "https://friska-production-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "friska-production",
//     storageBucket: "friska-production.appspot.com",
//     messagingSenderId: "421390674423",
//     appId: "1:421390674423:web:2bd1df096218059fbfa6f2",
//     measurementId: "G-MG3R2S2SJ9"
// };

// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
// var provider = new firebase.auth.GoogleAuthProvider();
// // var storage = firebase.storage();
// export { auth, firebase, provider };


import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {getDatabase} from 'firebase/database'

// const firebaseConfig = {
//     // Your credentials
//     apiKey: "AIzaSyBsBQGgRHEBszIBSg9td6OXu9_dSX0F5-w",
//     authDomain: "friska-production.firebaseapp.com",
//     databaseURL: "https://friska-production-default-rtdb.asia-southeast1.firebasedatabase.app",
//     projectId: "friska-production",
//     storageBucket: "friska-production.appspot.com",
//     messagingSenderId: "421390674423",
//     appId: "1:421390674423:web:2bd1df096218059fbfa6f2",
//     measurementId: "G-MG3R2S2SJ9"
// };
const firebaseConfig = {
    apiKey: "AIzaSyAgUzeABwX8f3BRBDyz3WyWrt0G0z6Se60",
    authDomain: "friska-old.firebaseapp.com",
    databaseURL: "https://friska-old-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "friska-old",
    storageBucket: "friska-old.appspot.com",
    messagingSenderId: "575599162575",
    appId: "1:575599162575:web:9a98a22ac137f872d5f3ba"
  };

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
// const database=getDatabase();
// console.log(database)
// var storage = firebase.storage();
export { auth, firebase, provider };