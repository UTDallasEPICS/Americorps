import styles from './styles.module.css';
import TimeSelector from './timeSelector';
import Leave from './leave';
import TextField from './textField';
import history from '../../../history';
import { useState } from 'react';

export default function VistaClockIn (){
    const [date,setDate]=useState<Date | null>();
    const [timeIn,setIn]=useState<Date | null>();
    const [timeOut,setOut]=useState<Date | null>();
    const [leave,setLeave]=useState<Number>(0);
    const [summary,setSummary]=useState<String>();


    const handleSubmit=()=>{
        alert("Entry Submitted");
        console.log("date: "+date?.getDate);
        console.log("in:"+timeIn?.getTime);
        console.log("out:"+timeOut?.getTime);
        console.log("emergency:"+ leave);
        console.log("quic summary:"+summary);
        history.goBack();
    };
 
    return(
        <div className={styles.root} >
            {/* back button */}
            <div className={styles.firstDiv}>
                {/* date selecter and time in/out inputs */}
                <TimeSelector setSelectedDate={setDate} setClockIn={setIn} setClockOut={setOut}/>
                {/* check box for leaves */}
                <Leave setLeaves={setLeave}/>
            </div>
            
            <div className={styles.secondDiv}>
                {/* textbox for daily activity field */}
                <TextField setSummary={setSummary}/>
                {/* submit button */}
                <button className={styles.submitButton} onClick={()=>{handleSubmit()}}>Submit</button>
            </div>
            
        </div>
    );
}