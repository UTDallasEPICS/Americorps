/*
index.tsx, AdminSearch
Author:         Front end
Description:    this component returns a list of all the search results
                enables to click to view results' profiles           
props:          name, uid
Date:           fall 2021
//*/
import AdminResult from "../AdminSmallComponents/AdminResults";
import AdminSearchBar from "../AdminSmallComponents/AdminSearchBar";
import styles from "./styles.module.css";
export default function AdminSearch(){
    return(
        <div className={styles.root}>
             {/* search bar */}
                <AdminSearchBar/>
             {/* Search restults */}
                <AdminResult/>
        </div>
    );
}