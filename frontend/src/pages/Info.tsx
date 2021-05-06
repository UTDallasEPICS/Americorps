import React from 'react';
import DemoCards from '../components/DemoCards';
import MemberCards from '../components/MemberCards';
import styles from './Info.module.css';

function Info() {
    return (
        <div className={styles.Info} >
            <div className={styles.InfoTop} >
                <div className={styles.InfoTopLeft}>
                    <h1>December 2020</h1>
                </div>
                <div className={styles.InfoTopRight}>
                    <i className='fas fa-edit' /> Edit
                </div>
            </div>
            <div className={styles.Demo}>
                <h1>Demographics</h1>
            </div>
            <DemoCards />
            {/* <hr></hr> */}
            <div className={styles.Member}>
                <h1>Member Development</h1>
            </div>
            <MemberCards />
        </div>
    )
}

export default Info
