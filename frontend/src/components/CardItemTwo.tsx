import React, { FC } from 'react';
import styles from './CardsTwo.module.css';

interface CardItemTwoProps {
    extra : string;
    data : string;
    title: string;
    total: string;
}

const CardItemTwo : FC<CardItemTwoProps> = (props) => {
    return (
        <li className={styles.CardsItemTwo}>
            <div className={styles.CardsItemBlockTwo}>
                <div className={props.extra === '1' ? styles.CardsItemExtraTwo : styles.CardsItemFigureTwo}>
                    <h1>{props.data}</h1>
                </div>
                <div className={styles.CardsItemTitleTwo}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.CardsItemTotalTwo}>
                    <h2>{props.total}</h2>
                </div>
            </div>
        </li>
    )
}

export default CardItemTwo
