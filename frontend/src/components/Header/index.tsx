/*
index.tsx, Header
Author:         Front end
Description:    this component returns the header for the landing page
props:          none
Date:           fall 2021
//*/
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