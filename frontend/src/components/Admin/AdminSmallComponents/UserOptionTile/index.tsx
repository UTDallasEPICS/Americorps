import styles from "./style.module.css";
/*
    this component
*/
function UserTile(props:any){
    return(
        <div className={styles.root}>
            <button className={styles.buttons} onChange={()=>console.log("clicked")}>{props.title}</button> 
        </div>
    );
}

export default UserTile;