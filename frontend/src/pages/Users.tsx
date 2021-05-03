import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pages.module.css';

function Users() {
    return (
        <div className={styles.users} >
            <Link to="/user">
                <h1>Users</h1>
            </Link>
        </div>
    )
}

export default Users
