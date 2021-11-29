/*
VistaSettings.tsx
Author:         Front end
Description:    this component return the vistasettings where the user can update/view their settings
props:          UID(?)
Date:           fall 2021
//*/
import styles from './styles.module.css'

export default function VistaSettings(){
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