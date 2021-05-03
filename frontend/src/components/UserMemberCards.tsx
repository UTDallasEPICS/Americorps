import React from "react";
import CardItem from "./CardItem";
import styles from './Cards.module.css';

function UserMemberCards() {
    return (
        <div className={styles.CardsFour}>
            <ul className={styles.CardsItemsFour}>
                <CardItem
                    data='0'
                    total='On-Site Orientation'
                    extra='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Community Outreach'
                    extra='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Community Volunteer Generation/Recruitment'
                    extra='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Effective Volunteer Management'
                    extra='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Resource Mapping'
                    extra='0'
                    title=''
                />
                <CardItem
                    data='0'
                    total='Resource Development/Fundraising'
                    extra='0'
                    title=''
                />
            </ul>
            <div className={styles.CardsTwoFour}>
                <ul className={styles.CardsItemsFour}>
                    <CardItem
                        data='0'
                        total='Grant Writing'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='Organizational Development'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='Performance Measures'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='Track Systems'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='Information Technology'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='On-Site Orientation and Training Plans'
                        extra='0'
                        title=''
                    />
                    <CardItem
                        data='0'
                        total='Others'
                        extra='0'
                        title=''
                    />
                </ul>
            </div>
        </div>
    )
}

export default UserMemberCards
