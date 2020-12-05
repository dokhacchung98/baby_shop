import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAgaBXvBpAqBcybsrUGmlO1hxXTayqgKrk",
    authDomain: "baby-e65c1.firebaseapp.com",
    databaseURL: "https://baby-e65c1.firebaseio.com",
    projectId: "baby-e65c1",
    storageBucket: "baby-e65c1.appspot.com",
    messagingSenderId: "550834879934",
    appId: "1:550834879934:web:3f3a1bc5e9fa2616c3cdef",
    measurementId: "G-VLNR1CTK6H"
};

firebase.initializeApp(firebaseConfig);

export default firebase;