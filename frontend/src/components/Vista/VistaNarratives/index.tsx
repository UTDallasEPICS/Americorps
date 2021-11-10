import React, { useState } from 'react';
import TextField from '../VistaClockIn/textField';
import DateSelector from '../VistaClockIn/dateSelector';
import history from '../../../history';
import styles from './styles.module.css'


export default function VistaNarratives(){
    const [date,setDate]=useState<Date | null>();
    const [summary,setSummary]=useState<String>();

    const handleSubmit=()=>{
        alert("Entry Submitted");
        console.log("date: "+date?.getDate);
        console.log("quic summary:"+summary);
        history.goBack();
    };
    return(
        <div>
            <div className={styles.topBar}>
                <h1>Narratives</h1>
            </div>
            <hr/>

            <div className={styles.container}>
                <div className={styles.dateSelector}>
                    <DateSelector setSelectedDate={setDate}/> 
                </div>

                <div className={styles.text}>
                    {/* textbox for daily activity field */}
                    <TextField setSummary={setSummary}/>
                    {/* submit button */}
                    <button className={styles.submitButton} onClick={()=>{handleSubmit()}}>Submit</button>
                </div>
            </div>
        </div>
    );
}