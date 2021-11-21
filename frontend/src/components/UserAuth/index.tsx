import React from 'react';
import styles from './index.module.css';
import history from '../../history';

class UserAuth extends React.Component{
  render(){
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
                      <input className={styles.textInput} type="text" name="email"/>
                    </label>
                  </div>
                  {/* sign in button */}
                  <div className={styles.buttonDiv}>
                    <input className={styles.buttonInput} type="submit" value="Sign in" onClick={()=>history.push('/AdminPage')}/>
                  </div>
              </div>
        </form>
      </div>
    )
  };
}
export default UserAuth;