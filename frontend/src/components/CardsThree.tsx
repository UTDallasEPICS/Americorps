import React from 'react';
import CardItem from "./CardItemThree";
import styles from './CardsThree.module.css';

function CardsThree() {
    return (
        <div className={styles.CardsThree}>
            <ul className={styles.CardsItemsThree}>
                <CardItem
                    data='0'
                    total='Total Volunteers Recruited'
                    special='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Hours Of Serice by Recruited Volunteers'
                    special='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Volunteers Managed'
                    special='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Hours Of Service by Managed Volunteers'
                    special='0'
                    title=''
                />
                <CardItem
                    data='$0'
                    total='Cash Resources Developed'
                    special='1'
                    title=''
                />
                <CardItem
                    data='$0'
                    total='Non-Cash Resources Developed'
                    special='1'
                    title=''
                />
            </ul>
        </div>
    )
}

export default CardsThree
