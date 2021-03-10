import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAT6elyLOiWvybdFK40E-IoDbRH9P5gk9g",
    authDomain: "facebook-messenger-d2eca.firebaseapp.com",
    projectId: "facebook-messenger-d2eca",
    storageBucket: "facebook-messenger-d2eca.appspot.com",
    messagingSenderId: "530254836188",
    appId: "1:530254836188:web:7849231dba1be23ece9f19",
    measurementId: "G-PHP71D0TD0"
})

const db = firebaseApp.firestore();

export {db};