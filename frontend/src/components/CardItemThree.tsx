import React, { FC } from 'react';
import styles from './CardsThree.module.css';

interface CardItemThreeProps {
    special : string;
    data : string;
    title: string;
    total: string;
}

const CardItemThree : FC<CardItemThreeProps> = (props) => {
    return (
        <li className={styles.CardsItemThree}>
            <div className={styles.CardsItemBlockThree}>
                <div className={props.special === '1' ? styles.CardsItemSpecialThree : styles.CardsItemFigureThree}>
                    <h1>{props.data}</h1>
                </div>
                <div className={styles.CardsItemTitleThree}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.CardsItemTotalThree}>
                    <h2>{props.total}</h2>
                </div>
            </div>
        </li>
    )
}

export default CardItemThree
