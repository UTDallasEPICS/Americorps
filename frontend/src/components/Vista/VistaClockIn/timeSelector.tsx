import styles from './styles.module.css'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

export default function TimeSelector(){

    var today=new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [clockIn, setClockIn] = useState<Date | null>(new Date());
    const [clockOut, setClockOut] = useState<Date | null>(new Date()); 
    
    const theme = createTheme({
        palette: {
            primary: {
                main: '#d1d1d1'
                },
            secondary: {
                main: '#e6e6e6'
            }
        }
      });
    return (
        <div className={styles.timeSelectorDiv}>
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={2}>

                    {/* date picker */}
                    <Grid item>
                        {/* date picker */}
                        <KeyboardDatePicker
                            clearable
                            inputVariant="outlined"
                            label="select date"
                            value={selectedDate}
                            placeholder="10/10/2018"
                            onChange={date => setSelectedDate(date)}
                            minDate={new Date()}
                            format="MM/dd/yyyy"
                        />
                    </Grid>


                    {/* time pickers */}
                    <Grid item>
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
                    <Grid item>
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
            <h1>time selectors</h1>
        </MuiThemeProvider>
        </div>
    );
}