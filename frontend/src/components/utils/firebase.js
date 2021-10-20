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
  appId: "1:639867939960:web:1e510c188fd5e37dc1918d",
  measurementId: "G-ZM76V5BY80"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;