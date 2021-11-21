import styles from './styles.module.css';
import UserTile from '../AdminSmallComponents/UserOptionTile';


/*
    this component
*/
function AdminHome(props:any){

    return(
        <div className={styles.root}>
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
                    <UserTile className={styles.button} title="Cite"/>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;