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
                      <input className={styles.textInput} type="text" name="email" id="email"/>
                    </label>
                  </div>
                  {/* password div */}
                  <div className={styles.passDiv}>
                    <label>
                      Password
                      <input className={styles.textInput} type="text" name="password" id="password"/>
                    </label>
                  </div>
                  {/* sign in button */}
                  <div className={styles.buttonDiv}>
                    <input type="button" value="Sign In" onClick={() => signIn((document.getElementById('email') as HTMLInputElement).value,(document.getElementById('password') as HTMLInputElement).value)}/>
                  </div>
              </div>
        </form>
      </div>
    )
  ;
}



const signIn = async(email:any, password:any) => {
  const auth = getAuth();

  console.log(email + " "+ password)
  
  


  signInWithEmailAndPassword(auth, String(email), String(password))
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