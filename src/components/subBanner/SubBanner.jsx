import React from "react";
import styles from "./subBanner.module.scss";

export default function SubBanner({ isDarkMode }) {
   return (
      <div
         className={`${isDarkMode ? styles.darkMode : ""} ${styles.subBanner}`}
      >
         <h3 className={styles.title}>We sell seeds </h3>
         <p className={styles.text}>
            that always sprout and gardening supplies which never break
         </p>
         <img
            className={styles.bgLeft}
            src="/assets/images/subbaner-left-bg.png"
            alt=""
         />
         <img
            className={styles.bgRight}
            src="/assets/images/subbanner-right-bg.png"
            alt=""
         />
      </div>
   );
}
