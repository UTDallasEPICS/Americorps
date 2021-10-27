//*
import React from 'react';
import styles from './VistaPage.module.css';
//*/
import VistaHome from '../../components/Vista/VistaHome';

// **************************incllude props
class VistaPage extends React.Component {

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
}

export default VistaPage;
