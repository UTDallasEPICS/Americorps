import React, { FC } from 'react';
import styles from './Cards.module.css';

interface CardItemProps {
    special : string;
    data : string;
    title: string;
    total: string;
}

const CardItem : FC<CardItemProps> = (props) => {
    return (
        <li className={styles.CardsItem}>
            <div className={styles.CardsItemBlock}>
                <div className={props.special === '1' ? styles.CardsItemSpecial : styles.CardsItemFigure}>
                    <h1>{props.data}</h1>
                </div>
                <div className={styles.CardsItemTitle}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.CardsItemTotal}>
                    <h2>{props.total}</h2>
                </div>
            </div>
        </li>
    )
}

export default CardItem
