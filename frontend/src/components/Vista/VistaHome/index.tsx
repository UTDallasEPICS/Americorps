/*
VistaHome.tsx
Author:         Front end
Description:    This component allows for the Vista user to choose which action to take 
                (clock in, settings, schedule, and narratives) 
props:          UID(?)
Date:           fall 2021 
//*/
import Time from '@material-ui/icons/AccessTime';
import Schedule from '@material-ui/icons/DateRange';
import Narratives from '@material-ui/icons/Create';
import Settings from '@material-ui/icons/Settings';
import styles from './styles.module.css';
import Card from './Card';
import history from '../../../history';


function VistaHome(){
    return(
        <div>
            <div className={styles.topBar}>
                <h1>Americorps</h1>
                <p className={styles.username}> Welcome "enter name" </p>
            </div>
            <hr/>
            <div className={styles.homeContent}>
                <div className={styles.grid}>

                    <button className={styles.time}>
                        <Time className={styles.icons} fontSize="large" onClick={()=>{
                            history.push('/vistaClockIn');
                            window.location.reload();
                        }}/>
                    </button>
                    <button>
                        <Schedule className={styles.icons} fontSize="large"
                        onClick={()=>{
                            history.push('/vistaSchedule');
                            window.location.reload();
                        }}/> 
                    </button>
                    <button>
                        <Settings className={styles.icons} fontSize="large"
                        onClick={()=>{
                            history.push('/vistaSettings');
                            window.location.reload();
                        }}/> 
                    </button>
                    <button>
                        <Narratives className={styles.icons} fontSize="large"
                        onClick={()=>{
                            history.push('/vistaNarratives');
                            window.location.reload();
                        }}/> 
                    </button>
                </div>
                <div className={styles.rightContainer}>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default VistaHome;