import styles from './styles.module.css'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PaletteType } from '@material-ui/core';
import { useState } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

export default function TimeSelector(){
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [clockIn, setClockIn] = useState<Date | null>(new Date());
    const [clockOut, setClockOut] = useState<Date | null>(new Date()); 
    
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
                        value={selectedDate}
                        placeholder="10/10/2018"
                        onChange={date => setSelectedDate(date)}
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
                        value={clockIn}
                        onChange={date=>setClockIn(date)}
                        style={{color:"#FFFFFF", margin:"2%" }} 
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                    }}/>
                    {/* clock out time picker */}
                    <KeyboardTimePicker
                        inputVariant="outlined"
                        label="select TIME-OUT"
                        value={clockOut}
                        onChange={date=>setClockOut(date)}
                        style={{color:"#FFFFFF", margin:"2%" }} 
                        KeyboardButtonProps={{
                            'aria-label':'change date'
                    }}/>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        </div>
    );
}