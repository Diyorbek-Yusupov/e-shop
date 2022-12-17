import React, { useContext } from "react";
import { ProductsData } from "../../contexts/context";
import styles from "./button.module.scss";

export default function Button({ children, bg, category, disabled = false }) {
   const { isDarkMode } = useContext(ProductsData);
   return (
      <button
         disabled={disabled}
         className={`${isDarkMode ? styles.darkMode : ""} ${styles.button} ${
            styles[bg]
         } ${category ? styles.category : ""}`}
      >
         {children}
      </button>
   );
}
