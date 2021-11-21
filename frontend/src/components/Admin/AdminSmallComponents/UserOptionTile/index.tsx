import styles from "./style.module.css";
import history from "../../../../history";
/*
    this component
*/
function UserTile(props:any){

    const setNextScreen=()=>{
        let title=props.title;
        if(title=="Vistas"){
        }else if(title=="Admin"){

        }else if(title=="Supervisor"){

        }else{

        }
    };
    return(
        <div className={styles.root}>
            <button className={styles.buttons} onChange={setNextScreen}>{props.title}</button> 
        </div>
    );
}

export default UserTile;