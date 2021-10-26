import React ,{ useState } from 'react';
import UserAuth from '../UserAuth/index';
import styles from './index.module.css';
import RandRimg from './rick_and_rosie.png';

function HomeBody() {
  //button 1 & 2 clicked?
  const [buttonUser, setOnClick] = useState(styles.buttonUserClick);
  const [buttonAdmin, setOnClick2] = useState(styles.buttonAdmin);
    return (
      <div className={styles.root}>
        <hr className={styles.hr}/>
        <div className={styles.image}>
          <img src ={RandRimg} alt="Rick and Rosie"/>
        </div>
        <div className={styles.body}>
          {/* welcome container */}
          <div className={styles.welcomeContainer}>
            <h1 className={styles.title}>Sign in as</h1>
          </div>
          {/* buttons container */}
          <div className={styles.buttonContainer}>
            {/* button for Vistas */}
            <button 
                onClick={()=>{
                  setOnClick(styles.buttonUserClick);
                  setOnClick2(styles.buttonAdmin);
                }}
                className={buttonUser}
                >
                Vista
              </button>
              {/* button for admins */}
            <button 
                  onClick={()=>{
                    setOnClick2(styles.buttonAdminClick);
                    setOnClick(styles.buttonUser)
                  }}
                  className={buttonAdmin} >
                      Admin
              </button>
              
          </div>

          {/* User authentication */}
          <UserAuth/>
        </div>
      </div>
    )
}
export default HomeBody;