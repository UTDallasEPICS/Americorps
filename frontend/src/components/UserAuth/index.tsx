/*
index.tsx, UserAuth
Author:         Front end
Description:    This component lets user log in and directs them to the appropriate pages 
props:          UID(?)
Date:           fall 2021 
//*/
import styles from './index.module.css';
import history from '../../history';

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
                      <input className={styles.textInput} type="text" name="email"/>
                    </label>
                  </div>
                  {/* sign in button */}
                  <div className={styles.buttonDiv}>
                    {/* on click: send to appropriate page */}
                    <input className={styles.buttonInput} type="submit" value="Sign in" onClick={()=>history.push('/AdminPage')}/>
                  </div>
              </div>
        </form>
      </div>
    )
  ;
}
export default UserAuth;