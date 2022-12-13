import React from "react";
import styles from "./productDesc.module.scss";

export default function ProductDesc() {
   return (
      <div className={styles.wrapper}>
         <ul className={styles.description}>
            <li className={styles.descriptionItem}>
               EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
               professional instructions created by PhD Helga George
            </li>
            <li className={styles.descriptionItem}>
               EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
               professional instructions created by PhD Helga George
            </li>
            <li className={styles.descriptionItem}>
               EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
               professional instructions created by PhD Helga George
            </li>
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
