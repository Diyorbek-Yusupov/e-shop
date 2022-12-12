import React from "react";
import styles from "./button.module.scss";

export default function Button({ children, bg, category }) {
   return (
      <button
         className={`${styles.button} ${styles[bg]} ${
            category ? styles.category : ""
         }`}
      >
         {children}
      </button>
   );
}
