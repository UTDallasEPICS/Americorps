import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* 
  This funcion is a test of firebases' signInWithEmailAndPassword,
  in order to implement this function into a real program, simply replace the
  email and password in the function with a real one and the console.logs
  with your desired functionality and import the files above

*/
const signInTest = async() => {
  const auth = getAuth();
signInWithEmailAndPassword(auth, "ssirspamalots@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user signed in:" + user);
  })
  .catch((error) => {
    //failure
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("user Failed to sign in:" + errorCode);
  });
}

/*
  This function is  a test of firebases' create user function, in order to add this to the website
  all you have to do is replace the email and password in the function with variables
  and remember to include the imports at the start of the file.

*/
const createUserTest = async() => {
  const auth = getAuth();
createUserWithEmailAndPassword(auth, "ssirspamalots@gmail.com", "password")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Account Creation Error:" + errorCode);
  });
}


/*
  This function is a test of firebases' sign out function. this is super simple and all you
  have to do is call the sign out function and the user signed in will automatically be signed out.

*/
const signOutTest = async() => {
  const auth = getAuth();
signOut(auth).then(() => {
  console.log("user Signed Out");
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  console.log("User failed to sign out");
});
}


//createUserTest()
//signInTest()
//signOutTest()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
