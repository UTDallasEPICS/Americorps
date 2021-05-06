import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className={styles.Nav}>
                <div className={styles.NavContainer}>
                    <Link to="/" className={styles.NavLogo}>
                        <img src="images/logo.png" alt="Logo" className={styles.LogoImg} /> AmeriCorps
                    </Link>
                    <div className={styles.MenuIcon} onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? styles.MenuActive : styles.Menu}>
                        <li className={styles.MenuItem}>
                            <Link to='/' className={styles.MenuItemLink} onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className={styles.MenuItem}>
                            <Link to='/users' className={styles.MenuItemLink} onClick={closeMobileMenu}>
                                Users
                            </Link>
                        </li>
                        <li className={styles.MenuItem}>
                            <Link to='/info' className={styles.MenuItemLink} onClick={closeMobileMenu}>
                                Info
                            </Link>
                        </li>
                        <li className={styles.MenuItem}>
                            <Link to='/admin' className={styles.MenuItemLink} onClick={closeMobileMenu}>
                                Admin
                            </Link>
                        </li>
                        {/* <li className='Menu-Item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
