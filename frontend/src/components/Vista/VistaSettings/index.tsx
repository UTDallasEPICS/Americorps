import React from 'react';
import styles from './styles.module.css'


export default function VistaSettings(){
    return(
<<<<<<< Updated upstream
        <div>narr</div>
=======
        <div>
            <div className={styles.topBar}>
                <h1>Settings</h1>
            </div>
            <hr/>
            <div className={styles.container}>
                <div className={styles.textDiv}>
                    Name
                    <input className={styles.textInput} type="text" name="name"/>
                </div>
                <div className={styles.textDiv}>
                    <label>
                    Company Email
                    <input className={styles.textInput} type="text" name="companyEmail"/>
                    </label>
                </div>
                <div className={styles.textDiv}>
                    <label>
                    Personal Email
                    <input className={styles.textInput} type="text" name="personalEmail"/>
                    </label>
                </div>
                <div className={styles.textDiv}>
                    <label>
                    Password
                    <input className={styles.textInput} type="text" name="password"/>
                    </label>
                </div>
            </div>
        </div>
>>>>>>> Stashed changes
    );
}