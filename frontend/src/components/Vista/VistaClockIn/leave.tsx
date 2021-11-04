import { useState } from "react";
import styles from "./styles.module.css"
export default function Leave(){
    const [leave, setLeave]= useState(0);
    console.log(leave);
    return(
        <div className={styles.leavesDiv}>
            <form>
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>setLeave(1)}
                    />
                    <p className={styles.leaveString}>None</p>
                </label>
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>setLeave(1)}
                    />
                    <p className={styles.leaveString}>Emergency Leave</p>
                </label>
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>setLeave(2)}
                    />
                    <p className={styles.leaveString}>Personal Leave</p>
                </label>
                <label className={styles.leaveOps}>
                    <input
                        name="leave"
                        type="radio"
                        className={styles.radioIns}
                        onClick={()=>setLeave(3)}
                    />
                    <p className={styles.leaveString}>Medical Leave</p>
                </label>

            </form>
        </div>
    );
}