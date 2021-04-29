import React, { FC } from 'react';
import styles from './Time.module.css';

interface TimeProps {
    date : string;
    data : string;
    nar: string;
}

const Time : FC<TimeProps> = (props) => {
    return (
        <li className={styles.TimeItem}>
            <div className={styles.TimeItemBlock}>
                <div className={styles.TimeItemFigure}>
                    <h1>{props.data}</h1>
                </div>
                <div className={styles.TimeItemDate}>
                    <h2>{props.date}</h2>
                </div>
                <div className={styles.TimeItemNar}>
                    <h2>{props.nar}</h2>
                </div>
            </div>
        </li>
    )
}

export default Time
