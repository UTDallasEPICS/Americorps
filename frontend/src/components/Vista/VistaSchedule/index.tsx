import React from 'react';
import styles from './styles.module.css'

// Change name to history

export default function VistaSchedule(){
    return(
        <div>
            <div className={styles.topBar}>
                <h1>History</h1>
            </div>
            <hr/>
            <br/>
            <div className={styles.container}>
                <div>
                   <button>January 2021
                   </button>
               </div>
               <br/>
               <div>
                   <button>Feburary 2021</button>
               </div>
               <br/>
               <div>
                   <button> March 2021 </button>
               </div>
               <br/>
               <div>
                   <button>April 2021</button>
               </div>
               <br/>
               <div>
                   <button>May 2021</button>
               </div>
               <br/>
               <div>
                   <button>June 2021</button>
               </div>
               <br/>
               <div>
                   <button>July 2021</button>
               </div>
            </div>
            
        </div>
    );
}