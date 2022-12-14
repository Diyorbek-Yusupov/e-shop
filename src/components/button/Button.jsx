import React from "react";
import styles from "./button.module.scss";

export default function Button({ children, bg, category, disabled = false }) {
   return (
      <button
         disabled={disabled}
         className={`${styles.button} ${styles[bg]} ${
            category ? styles.category : ""
         }`}
      >
         {children}
      </button>
   );
}
