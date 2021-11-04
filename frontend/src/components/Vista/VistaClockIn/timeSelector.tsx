import styles from './styles.module.css'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, PaletteType } from '@material-ui/core';
import { useState } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

export default function TimeSelector(){

    var today=new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [clockIn, setClockIn] = useState<Date | null>(new Date());
    const [clockOut, setClockOut] = useState<Date | null>(new Date()); 
    
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
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={2}>
                    {/* prompt */}
                    <Grid item xs={12}>
                        <h1 className={styles.prompts}>Please select a date</h1>
                    </Grid>
                    {/* date picker */}
                    <Grid item xs={12}>
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
                            style={{color:"#FFFFFF" }} 
                        />
                    </Grid>

                    {/* prompt */}
                    <Grid item xs={12}>
                        <h1 className={styles.prompts}>Please select clock in/out times</h1>
                    </Grid>
                    {/* time pickers */}
                    <Grid item xs={3}>
                        {/* clock in time picker */}
                        <KeyboardTimePicker
                            inputVariant="outlined"
                            label="select TIME-IN"
                            value={clockIn}
                            onChange={date=>setClockIn(date)}
                            KeyboardButtonProps={{
                                'aria-label':'change date'
                        }}/>
                    </Grid>
                    <Grid item xs={3}>
                        {/* clock out time picker */}
                        <KeyboardTimePicker
                        inputVariant="outlined"
                            label="select TIME-OUT"
                            value={clockOut}
                            onChange={date=>setClockOut(date)}
                            KeyboardButtonProps={{
                                'aria-label':'change date'
                        }}/>
                    </Grid>
                    
                </Grid>
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
}