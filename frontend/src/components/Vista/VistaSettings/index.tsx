import React from 'react';
import styles from './styles.module.css'


function VistaSettings(){
    return(
        <div>
            <div className={styles.topBar}>
                <h1>Settings</h1>
            </div>
            <div className={styles.grid}>
                <div>Name</div>
                <div>Company Email</div>
                <div>Personal Email</div>
                <div>Password</div>
            </div>
        </div>
    );
}
 export default VistaSettings;