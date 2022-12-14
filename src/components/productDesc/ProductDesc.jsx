import React from "react";
import styles from "./productDesc.module.scss";

export default function ProductDesc({ children }) {
   return (
      <div className={styles.wrapper}>
         <ul className={styles.description}>
            <li className={styles.descriptionItem}>{children}</li>
         </ul>
         <div className={styles.address}>
            <div className={styles.addressItem}>
               <span>Package Dimensions</span>
               <h4>5.51 x 3.5 x 0.35 inches</h4>
            </div>
            <div className={styles.addressItem}>
               <span>Item Weight</span>
               <h4>0.317 ounces</h4>
            </div>
            <div className={styles.addressItem}>
               <span>ASIN</span>
               <h4>B08Z3HN5MP</h4>
            </div>
         </div>
      </div>
   );
}
