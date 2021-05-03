import React from 'react';
import UserDemoCards from '../components/UserDemoCards';
import UserTimeCard from '../components/UserTimeCard';
import styles from './User.module.css';
import UserMemberCards from '../components/UserMemberCards';

function User() {
    return (
        <div className={styles.User} >
            <div className={styles.UserMain}>
                <div className={styles.UserLeft}> 
                    <i className="fas fa-user-circle"></i>
                    <h1 className={styles.UserLeftRight}>Briauna <br/> Derry</h1>
                </div>
                <div className={styles.UserMiddle}>
                    <h2>January 2021</h2>
                </div>
                <div className={styles.UserRight}>
                    <div>
                        <i className='fas fa-edit' /> Edit User
                    </div>
                    <div>
                        <i className="fas fa-trash-alt"></i> Delete User
                    </div>
                </div>
            </div>
            <UserTimeCard />
            <div className={styles.Monthly}>
                <div className={styles.Month}>
                    <h1>Monthly Total: 97.5 hrs</h1>
                </div>
                <div className={styles.Year}>
                    <h1>Yearly Total: 97.5 hrs</h1>
                </div>
            </div>
            <div className={styles.Demo}>
                <h1>Demographics</h1>
            </div>
            <UserDemoCards />
            <div className={styles.Member}>
                <h1>Member Development</h1>
            </div>
            <UserMemberCards />
        </div>
    )
}

export default User
