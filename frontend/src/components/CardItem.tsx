import React, { FC } from 'react';
// import { NodeArray } from 'typescript';
import styles from './Cards.module.css';

interface CardItemProps {
    special? : number;
    extra? : string;
    data : string;
    title: string;
    total: string;
    // CardNumber: string;
}

const CardItem : FC<CardItemProps> = (props) => {
    // const CardsItemSpecial = `CardsItemSpecial${props.CardNumber}`;


    return (
        <li className={styles.CardsItem}>
            <div className={styles.CardsItemBlock}>
                <div className={`${props.special === 1 ? styles.CardsItemSpecial : styles.CardsItemFigure} ${props.extra === '1' ? styles.CardsItemExtraTwo : styles.CardsItemFigureTwo} ${props.extra === '1' ? 'foo' : 'bar'}`}>
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
