import styles from './styles.module.css'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { PaletteType } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { useState } from 'react';

export default function DateSelector(props:any){ 
    const setSelectedDate=(date:Date)=>{
        setDate(date);
        props.setDate(date);
    }
    
    //states for dates
    const [currDate, setDate]= useState<Date | null>(new Date());
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
        <div className={styles.dateSelectorDiv}>
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
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
        </div>
    );
}