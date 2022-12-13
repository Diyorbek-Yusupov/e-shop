import React from "react";
import styles from "./title.module.scss";

export default function Title({ children, mb, align = "start" }) {
   return (
      <h2
         style={{ marginBottom: mb + "px", textAlign: align }}
         className={styles.title}
      >
         {children}
      </h2>
   );
}
