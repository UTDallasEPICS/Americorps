//*
import React from 'react';
import styles from './AdminPage.module.css';
//*/


// **************************incllude props
class AdminPage extends React.Component {

    /*
    0=vista home page
    1=vista clockIn
    2=vista narratives
    3=vista schedule
    4=vista settings
    //*/ 
    render(){
    return (
      <div className={styles.mainDiv}> 
        {/* vista home page */}
        admin
        {/* vista clockIn page */}
        <div></div>
        {/* vista narratives page */}
        <div></div> 
        {/* vista schedules page */}
        <div></div>
        {/* vista settings page */}
        <div></div>
      </div>
    )
    }
}

export default AdminPage;
