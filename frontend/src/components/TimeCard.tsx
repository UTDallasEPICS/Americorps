import React from 'react';
import Time from "./Time";
import styles from './Time.module.css';

function TimeCard() {
    return (
        <div className={styles.TimeCards}>
            <ul className={styles.TimeCardsItems}>
                <Time
                    data='26.5 hours'
                    date='4th - 10th'
                    nar='Narratives'
                />
                <Time
                    data='17 hours'
                    date='11th - 17th'
                    nar='Narratives'
                />
                <Time
                    data='36.5 hours'
                    date='18th - 24th'
                    nar='Narratives'
                />
                <Time
                    data='17.5 hours'
                    date='25th - 31st'
                    nar='Narratives'
                />
            </ul>
        </div>
    )
}

export default TimeCard
