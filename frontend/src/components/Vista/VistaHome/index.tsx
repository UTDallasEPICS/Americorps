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
                    <button className={styles.time}><Time fontSize="large"/> </button>
                    <button ><Schedule fontSize="large"/> </button>
                    <button onClick={()=>history.push('/SettingPage')}> <Settings fontSize="large"/> </button>
                    <button ><Narratives fontSize="large"/> </button>
                </div>
                <div className={styles.rightContainer}>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default VistaHome;