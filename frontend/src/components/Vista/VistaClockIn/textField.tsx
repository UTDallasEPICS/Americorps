import styles from './styles.module.css'
import MuiTextField from '@mui/material/TextField';
import { useState } from 'react';

export default function TextField(){
    const [summary, setSummary] = useState<String>(""); 
    console.log(summary);
    return (
        <div className={styles.textFieldDiv}>
            {/* <MuiThemeProvider theme={mytheme}> */}
                <MuiTextField
                id="filled-textarea"
                placeholder="Enter text here..."
                variant="filled"
                multiline
                label="Quick summary"  
                rows={10} 
                inputProps={{className:styles.textFiledInput}}
                InputLabelProps={{className:styles.textFiledInput}} 
                onChange={()=>setSummary("changed")} 
                />
                
            {/* </MuiThemeProvider> */}
        </div>
    );
}