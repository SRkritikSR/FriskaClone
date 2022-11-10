
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    // Your credentials
    apiKey: "AIzaSyBsBQGgRHEBszIBSg9td6OXu9_dSX0F5-w",
    authDomain: "friska-production.firebaseapp.com",
    databaseURL: "https://friska-production-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "friska-production",
    storageBucket: "friska-production.appspot.com",
    messagingSenderId: "421390674423",
    appId: "1:421390674423:web:2bd1df096218059fbfa6f2",
    measurementId: "G-MG3R2S2SJ9"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, firebase, provider };