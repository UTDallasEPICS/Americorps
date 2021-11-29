/*
Card.tsx
Author:         Front end
Description:    This component returns the MUI pickers for the dates 
props:          UID(?)
Date:           fall 2021 
//*/
import styles from './styles.module.css'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PaletteType } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { useState } from 'react';

export default function TimeSelector(props:any){ 

    //add this stoff to DB 
    const setSelectedDate=(date:Date)=>{
        setDate(date);
        props.setDate(date);
    }
    const setClockIn=(date:Date)=>{
        setIn(date);
        props.setIn(date);
    }
    const setClockOut=(date:Date)=>{
        setOut(date);
        props.setOut(date);
    }
    
    //states for dates
    const [currDate, setDate]= useState<Date | null>(new Date());
    const [currIn, setIn]= useState<Date | null>(new Date());
    const [currOut, setOut]= useState<Date | null>(new Date());
    // styles for material ui stuff
    const theme = createTheme({
        palette: {
            primary:{
                main:'#ffffff'
            },
            secondary:{
                main:'#000000'
            },
            type: 'dark' as PaletteType,
        }
      });
    return (
        <div className={styles.timeSelectorDiv}>
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                {/* prompt */}
                    <h1 className={styles.prompts}>Please select a date</h1>
                {/* date picker */}
                    <KeyboardDatePicker
                        clearable
                        inputVariant="outlined"
                        color={'primary'}
                        label="select date"
                        value={currDate}
                        placeholder="10/10/2018"
                        onChange={date=>setSelectedDate}
                        format="MM/dd/yyyy"
                        style={{color:"#FFFFFF", margin:"2%" }} 
                    />
                {/* prompt */}
                    <h1 className={styles.prompts}>Please select clock in/out times</h1>

                {/* time pickers */}
                    {/* clock in time picker */}
                    <KeyboardTimePicker
                        inputVariant="outlined"
                        label="select TIME-IN"
                        value={currIn}
                        onChange={date=>setClockIn}
                        style={{color:"#FFFFFF", margin:"2%" }} 
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                    }}/>
                    {/* clock out time picker */}
                    <KeyboardTimePicker
                        inputVariant="outlined"
                        label="select TIME-OUT"
                        value={currOut}
                        onChange={date=>setClockOut}
                        style={{color:"#FFFFFF", margin:"2%" }} 
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                    }}/>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        </div>
    );
}