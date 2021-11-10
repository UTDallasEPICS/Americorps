//*
import React from 'react';
import styles from './HomePage.module.css';
//*/

import Header from '../../components/Header/index'; 
import HomeBody from '../../components/HomeBody/index'; 


function HomePage() {
    var admin=0;

    if(!admin){ //if user mode is selected
      
    }else{ //else admin user is selcted

    }
    return (
      <div className={styles.mainDiv}> 
        <Header/>
        <HomeBody/>
      </div>
    )
}



export default HomePage;
