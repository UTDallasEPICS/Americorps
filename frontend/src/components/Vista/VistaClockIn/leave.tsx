import { Grid } from "@material-ui/core";
import { useState } from "react";
import styles from "./styles.module.css"

export default function Leave(){
    const [leave, setLeave]= useState(0);
    return(
        <div className={styles.leavesDiv}>
            <form>
                <label className={styles.leaveOps}>
                    <input
                        name="isGoing"
                        type="radio"
                        className={styles.radioIns}
                        />
                    <p>Emergency Leave</p>
                </label>
                <label className={styles.leaveOps}>
                    <input
                        name="numberOfGuests"
                        type="radio"
                        className={styles.radioIns}
                        />
                    <p>Personal Leave</p>
                </label>
                <label className={styles.leaveOps}>
                    <input
                        name="numberOfGuests"
                        type="radio"
                        className={styles.radioIns}
                        />
                    <p>Medical Leave</p>
                </label>

            </form>
        </div>
    );
}