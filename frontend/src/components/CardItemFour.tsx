import React, { FC } from 'react';
import styles from './CardsFour.module.css';

interface CardItemFourProps {
    extra : string;
    data : string;
    title: string;
    total: string;
}

const CardItemFour : FC<CardItemFourProps> = (props) => {
    return (
        <li className={styles.CardsItemFour}>
            <div className={styles.CardsItemBlockFour}>
                <div className={props.extra === '1' ? styles.CardsItemExtraFour : styles.CardsItemFigureFour}>
                    <h1>{props.data}</h1>
                </div>
                <div className={styles.CardsItemTitleFour}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.CardsItemTotalFour}>
                    <h2>{props.total}</h2>
                </div>
            </div>
        </li>
    )
}

export default CardItemFour
