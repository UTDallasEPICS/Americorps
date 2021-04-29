import React from "react";
import CardItemTwo from "./CardItemTwo";
import styles from './CardsTwo.module.css';

function CardsTwo() {
    return (
        <div className={styles.CardsTwo}>
            <ul className={styles.CardsItemsTwo}>
                <CardItemTwo
                    data='0'
                    title='On-Site Orientation'
                    total='Yearly Total : 92.5'
                    extra='1'
                />
                <CardItemTwo
                    data='0.5'
                    title='Community Outreach'
                    total='Yearly Total : 15.5'
                    extra='0'
                />
                <CardItemTwo
                    data='0'
                    title='Community Volunteer Generation/Recruitment'
                    total='Yearly Total : 1'
                    extra='1'
                />
                <CardItemTwo
                    data='0'
                    title='Effective Volunteer Management'
                    total='Yearly Total : 0.5'
                    extra='1'
                />
                <CardItemTwo
                    data='0'
                    title='Resource Mapping'
                    total='Yearly Total : 2'
                    extra='1'
                />
                <CardItemTwo
                    data='24'
                    title='Resource Development/Fundraising'
                    total='Yearly Total : 54'
                    extra='0'
                />
            </ul>
            <div className={styles.CardsTwoTwo}>
                <ul className={styles.CardsItemsTwo}>
                    <CardItemTwo
                        data='8.5'
                        title='Grant Writing'
                        total='Yearly Total : 8.5'
                        extra='0'
                    />
                    <CardItemTwo
                        data='13'
                        title='Organizational Development'
                        total='Yearly Total : 163'
                        extra='0'
                    />
                    <CardItemTwo
                        data='12.5'
                        title='Performance Measures'
                        total='Yearly Total : 66.25'
                        extra='0'
                    />
                    <CardItemTwo
                        data='5.5'
                        title='Track Systems'
                        total='Yearly Total : 7.5'
                        extra='0'
                    />
                    <CardItemTwo
                        data='6'
                        title='Information Technology'
                        total='Yearly Total : 79'
                        extra='0'
                    />
                    <CardItemTwo
                        data='3'
                        title='On-Site Orientation and Training Plans'
                        total='Yearly Total : 20'
                        extra='0'
                    />
                    <CardItemTwo
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

export default CardsTwo
