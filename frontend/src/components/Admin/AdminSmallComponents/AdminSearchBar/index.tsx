/*
index.tsx, AdminResults
Author:         Front end
Description:    this component returns a list of all the search results
                enables to click to view results' profiles           
props:          name, uid
Date:           fall 2021
//*/
import styles from "./styles.module.css"

export default function AdminSearchBar(){
    return(
    <div className={styles.root}>
        <form className={styles.form}> 
            {/* Search text box */}
            <input className={styles.input} type="text" name="Search"/>

            {/* Search button */}
            <input className={styles.input} type="submit" />
        </form>
    </div>
    );

}