//*
import React from 'react';
import styles from './VistaPage.module.css';
//*/
import VistaHome from '../../components/VistaHome';

// **************************incllude props
function VistaPage() {

    /*
    0=vista home page
    1=vista clockIn
    2=vista narratives
    3=vista schedule
    4=vista settings
    //*/ 

    return (
      <div className={styles.mainDiv}> 
        {/* vista home page */}
        <div><VistaHome/></div>
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

export default VistaPage;
