import react from "react";
import userImg from './user-circle.png';

type Props = {
    completed: number,
    totalHours: number,
    username: string
}

const UserBar = (props: Props) => {
    const{ completed, totalHours, username } = props; 

    let barLength = (completed/totalHours)*100; 

    {/* Add ways to move positioning as more user compoents are added */}
    const barPosition : react.CSSProperties = {
        position: 'relative',
        top: '210px'
    }
    
    const containerStyles : react.CSSProperties  = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: "58px",
        width: '1012px',
        backgroundColor: '#112542',
        borderStyle: 'solid',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#0b2a77',
        margin: 50
    }

    const fillerStyles : react.CSSProperties  = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        width: `${completed}%`,
        backgroundColor:"#0b2a77",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const imageStyles : react.CSSProperties  = {
        padding:12
    }

    const nameStyles : react.CSSProperties  = {
        color: 'white', 
        fontFamily: 'Roboto',
        fontSize: 18
    }

    const hoursStyles : react.CSSProperties = {
        padding:12,
        color: 'white', 
        fontFamily: 'Roboto',
        fontSize: 18
    }
    
    return(
        <div style = {barPosition}>
        <div style = {containerStyles}>

           <div style = {fillerStyles}>
               
                {/* User Image Here */}
                <img src = {userImg} alt = "User" style = {imageStyles}/>

                {/* User name here */}
                <div style = {nameStyles}>{`${username}`}</div>
            </div>

            {/* Hours Here */}
            <div style = {hoursStyles}>{completed} / {totalHours} hrs</div>

       </div>
       </div>
    );
};

export default UserBar;