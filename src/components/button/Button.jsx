import React from "react";
import styles from "./button.module.scss";

export default function Button({ children, bg }) {
   return (
      <button className={`${styles.button} ${styles[bg]}`}>{children}</button>
   );
}
