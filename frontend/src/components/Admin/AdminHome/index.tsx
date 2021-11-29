/*
index.tsx, AdminHome
Author:         Front end
Description:    this component returns the action options (UserTiles)
                to search  vistas||admins||supervisor||site              
props:          name, uid
Date:           fall 2021
//*/
import styles from './styles.module.css';
import UserTile from '../AdminSmallComponents/UserOptionTile';

function AdminHome(props:any){

    return(
        <div className={styles.root}>
            {/* quick header */}
            <div className={styles.topBar}>
                <h1>Americorps</h1>
                <p className={styles.username}> Welcome {props.name} </p>
            </div>
            <hr/>
            <div className={styles.homeContent}>
                <div className={styles.grid}>
                    <UserTile className={styles.button} title="Vistas" />
                    <UserTile className={styles.button} title="Admin"/>
                    <UserTile className={styles.button} title="Supervisor"/>
                    <UserTile className={styles.button} title="Site"/>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;