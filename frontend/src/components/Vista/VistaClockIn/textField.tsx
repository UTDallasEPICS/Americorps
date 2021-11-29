/*
TextField.tsx
Author:         Front end
Description:    This component returns a text area for the user to wrtie a description of their day
props:          UID(?)
Date:           fall 2021 
//*/
import styles from './styles.module.css'
import MuiTextField from '@mui/material/TextField';

export default function TextField(props:any){

    //update state in index, send that shit to the DB
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
        props.setSummary(event.target.value);
    }

    return (
        <div className={styles.textFieldDiv}>
            {/* cool lookin textfield yuh yuhhhhh */}
                <MuiTextField
                id="textArea"
                placeholder="Enter text here..."
                variant="filled"
                multiline
                label="Quick summary"  
                rows={10} 
                inputProps={{className:styles.textFiledInput}}
                InputLabelProps={{className:styles.textFiledInput}} 
                onChange={handleChange} 
                />
        </div>
    );
}