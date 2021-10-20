import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAv_Q0TIDOXCyOjb0guTSUbgYNC4_QiwZg",
    authDomain: "epcs-americorps.firebaseapp.com",
    databaseURL: "https://epcs-americorps-default-rtdb.firebaseio.com",
    projectId: "epcs-americorps",
    storageBucket: "epcs-americorps.appspot.com",
    messagingSenderId: "639867939960",
    appId: "1:639867939960:web:7ad284cd3c0a516fc1918d",
    measurementId: "G-0L5474GXWT"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;