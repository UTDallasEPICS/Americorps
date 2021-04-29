import React from 'react';
import Cards from '../components/Cards';
import CardsTwo from '../components/CardsTwo';
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
            <Cards />
            {/* <hr></hr> */}
            <div className={styles.Member}>
                <h1>Member Development</h1>
            </div>
            <CardsTwo />
        </div>
    )
}

export default Info
