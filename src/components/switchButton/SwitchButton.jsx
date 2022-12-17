import React, { useContext } from "react";
import { ProductsData } from "../../contexts/context";
import styles from "./switchButton.module.scss";

export default function SwitchButton() {
   const { isDarkMode, setIsDarkMode } = useContext(ProductsData);
   return (
      <div className={styles.wrapper}>
         <input
            checked={isDarkMode}
            className={styles.input}
            type="checkbox"
            id="toggleTheme"
            onChange={() => {
               setIsDarkMode((prevVal) => {
                  localStorage.setItem("isDarkMode", !prevVal);
                  return !prevVal;
               });
            }}
         />
         <label className={styles.label} htmlFor="toggleTheme">
            <span className={styles.button}></span>
         </label>
      </div>
   );
}
