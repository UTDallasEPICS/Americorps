/*
HomePage.tsx
Author:         Front end
Description:    this class sends the website to Homebody
props:          none
Date:           fall 2021
//*/
//*/
import styles from './HomePage.module.css';


import Header from '../../components/Header/index'; 
import HomeBody from '../../components/HomeBody/index'; 


function HomePage() {
    return (
      <div className={styles.mainDiv}> 
        <Header/>
        <HomeBody/>
      </div>
    )
}

export default HomePage;
