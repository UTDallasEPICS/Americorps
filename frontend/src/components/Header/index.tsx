import React from 'react';
import styles from './index.module.css';

function Header() {
    return (
      <div>
        {/* ****** put logo here ****** */}
        <div className={styles.header}>
            <h1 className={styles.title}>AmeriCorps</h1>
        </div>
      </div>
    )
}
export default Header;