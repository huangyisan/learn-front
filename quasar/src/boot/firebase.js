// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/database");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCKINi2s-XxrjkvsF-erjvFclF8PeRllpQ",
  authDomain: "awesome-todo-c687e.firebaseapp.com",
  databaseURL: "https://awesome-todo-c687e.firebaseio.com",
  projectId: "awesome-todo-c687e",
  storageBucket: "awesome-todo-c687e.appspot.com",
  messagingSenderId: "680676326399",
  appId: "1:680676326399:web:1f1068014607574cdfc5ca",
  measurementId: "G-VX8694WCC0"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }