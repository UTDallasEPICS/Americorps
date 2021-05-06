import React from "react";
import CardItem from "./CardItem";
import styles from './Cards.module.css';

function MemberCards() {
    return (
        <div className={styles.CardsTwo}>
            <ul className={styles.CardsItemsTwo}>
                <CardItem
                    data='0'
                    title='On-Site Orientation'
                    total='Yearly Total : 92.5'
                    extra='1'
                />
                <CardItem
                    data='0.5'
                    title='Community Outreach'
                    total='Yearly Total : 15.5'
                    extra='0'
                />
                <CardItem
                    data='0'
                    title='Community Volunteer Generation/Recruitment'
                    total='Yearly Total : 1'
                    extra='1'
                />
                <CardItem
                    data='0'
                    title='Effective Volunteer Management'
                    total='Yearly Total : 0.5'
                    extra='1'
                />
                <CardItem
                    data='0'
                    title='Resource Mapping'
                    total='Yearly Total : 2'
                    extra='1'
                />
                <CardItem
                    data='24'
                    title='Resource Development/Fundraising'
                    total='Yearly Total : 54'
                    extra='0'
                />
            </ul>
            <div className={styles.CardsTwoTwo}>
                <ul className={styles.CardsItemsTwo}>
                    <CardItem
                        data='8.5'
                        title='Grant Writing'
                        total='Yearly Total : 8.5'
                        extra='0'
                    />
                    <CardItem
                        data='13'
                        title='Organizational Development'
                        total='Yearly Total : 163'
                        extra='0'
                    />
                    <CardItem
                        data='12.5'
                        title='Performance Measures'
                        total='Yearly Total : 66.25'
                        extra='0'
                    />
                    <CardItem
                        data='5.5'
                        title='Track Systems'
                        total='Yearly Total : 7.5'
                        extra='0'
                    />
                    <CardItem
                        data='6'
                        title='Information Technology'
                        total='Yearly Total : 79'
                        extra='0'
                    />
                    <CardItem
                        data='3'
                        title='On-Site Orientation and Training Plans'
                        total='Yearly Total : 20'
                        extra='0'
                    />
                    <CardItem
                        data='1'
                        title='Others'
                        total='Yearly Total : 47'
                        extra='0'
                    />
                </ul>
            </div>
        </div>
    )
}

export default MemberCards
