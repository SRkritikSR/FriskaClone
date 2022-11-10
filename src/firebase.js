
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    // Your credentials
    apiKey: "AIzaSyCCuAhYmH0WXKpKoDr7KrjIhRsI4ONxE6c",
    authDomain: "friska-auth.firebaseapp.com",
    projectId: "friska-auth",
    storageBucket: "friska-auth.appspot.com",
    messagingSenderId: "940037593977",
    appId: "1:940037593977:web:eb805b6171c4119cadeda8"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, firebase, provider };