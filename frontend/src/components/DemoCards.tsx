import React from "react";
import CardItem from "./CardItem";
import styles from './Cards.module.css';

function DemoCards() {
    return (
        <div className={styles.Cards}>
            <ul className={styles.CardsItems}>
                <CardItem
                    data='396'
                    title='Total Volunteers Recruited'
                    total='Yearly Total : 851'
                    special={0}
                    // CardNumber='One'
                />
                <CardItem
                    data='1702'
                    title='Hours Of Serice by Recruited Volunteers'
                    total='Yearly Total : 2869 hours'
                    special={0}
                    // CardNumber='One'
                />
                <CardItem
                    data='217'
                    title='Volunteers Managed'
                    total='Yearly Total : 719'
                    special={0}
                    // CardNumber='One'
                />
                <CardItem
                    data='1746'
                    title='Hours Of Service by Managed Volunteers'
                    total='Yearly Total : 11100 hours'
                    special={0}
                    // CardNumber='One'
                />
                <CardItem
                    data='$469,785'
                    title='Cash Resources Developed'
                    total='Yearly Total : $1,487,395'
                    special={1}
                    // CardNumber='One'
                />
                <CardItem
                    data='$157,372'
                    title='Non-Cash Resources Developed'
                    total='Yearly Total : $162,716'
                    special={1}
                    // CardNumber='One'
                />
            </ul>

        </div>
    )
}

export default DemoCards
