/*
index.tsx, UserTile
Author:         Front end
Description:    this component returns the action options (UserTiles)
                to search  vistas||admins||supervisor||site              
props:          name, uid
Date:           fall 2021
//*/
import styles from "./style.module.css";
import history from "../../../../history";

function UserTile(props:any){

    const setNextScreen=()=>{
        let title=props.title;

        // history.push(path);
    };
    return(
        <div className={styles.root}>
            <button className={styles.buttons} onChange={setNextScreen}>{props.title}</button> 
        </div>
    );
}

export default UserTile;