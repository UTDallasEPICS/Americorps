import React from 'react';
import styles from './index.module.css';
import history from '../../history';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { sign } from 'crypto';
import { type } from 'os';

function UserAuth (){

    return (
      <div>
        {/* user log in form */}
        <form className={styles.form}>
              {/* main form div */}
              <div className={styles.formDiv}>
                  {/* email div*/}
                  <div className={styles.emailDiv}>
                    <label>
                      Email
                      <input className={styles.textInput} type="text" name="email"/>
                    </label>
                  </div>
                  {/* password div */}
                  <div className={styles.passDiv}>
                    <label>
                      Password
                      <input className={styles.textInput} type="text" name="Password"/>
                    </label>
                  </div>
                  {/* sign in button */}
                  <div className={styles.buttonDiv}>
                    <button onClick={signIn(document.getElementById('email').value,document.getElementById('Password').value)}>Sign In</button>
                  </div>
              </div>
        </form>
      </div>
    )
  ;
}

const signIn = async(Email:any, Password:any) => {
  const auth = getAuth();

  console.log(Email + " "+ Password)
  
  


  signInWithEmailAndPassword(auth, String(Email), String(Password))
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user signed in:" + user);
    history.push('/VistaPage') 
  })
  .catch((error) => {
    //failure
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("user Failed to sign in:" + errorCode);

  });
}


export default UserAuth;