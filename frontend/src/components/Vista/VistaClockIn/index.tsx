import styles from './styles.module.css';
import TimeSelector from './timeSelector';
import Leave from './leave';
import TextField from './textField';

export default function VistaClockIn (){
    return(
        <div className={styles.root} >
            {/* back button */}
            <div className={styles.firstDiv}>
                {/* date selecter and time in/out inputs */}
                <TimeSelector/>
                {/* check box for leaves */}
                <Leave/>
            </div>
            
            <div className={styles.secondDiv}>
                {/* textbox for daily activity field */}
                <TextField/>
                {/* submit button */}
                <button defaultValue="submit" ></button>
            </div>
            
        </div>
    );
}