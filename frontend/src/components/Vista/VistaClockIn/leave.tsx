/*
leave.tsx
Author:         Front end
Description:    This component returns the options to select a leave option
                (None, emergency, personal, medical)
props:          UID(?)
Date:           fall 2021 
//*/

import styles from "./styles.module.css"
 
export default function Leave(props:any){
    // const [leave, setLeave]= useState(0);
    const handleEvent=(num:number)=>{
        props.setLeaves(num);
    }
    return(
        <div className={styles.leavesDiv}>
            {/* big form with labels for leave ops */}
            <form>
                {/* None */}
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>handleEvent(0)}
                    />
                    <p className={styles.leaveString}>None</p>
                </label>
                {/* Emergency leave */}
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>handleEvent(1)}
                    />
                    <p className={styles.leaveString}>Emergency Leave</p>
                </label>
                {/* personal leave */}
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>handleEvent(2)}
                    />
                    <p className={styles.leaveString}>Personal Leave</p>
                </label>
                {/* medical leave */}
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>handleEvent(3)}
                    />
                    <p className={styles.leaveString}>Medical Leave</p>
                </label>

            </form>
        </div>
    );
}