import React, { useContext, useState } from "react";
import { ProductsData } from "../../contexts/context";
import styles from "./accordion.module.scss";

/*    
      component 3ta props oladi: "type" "title" "content";

      1) "type" 2xil qiymat bulishi mumkin: "forApply" yoki "forFAQ";
      "forApply" Apply sahifadagi accordion uchun, "forFAQ" F.A.Q sahifadagi accordion uchun.

      2) "title" accordionning title uchun, yani bosilganda ochilib yopiladigan jaydagi yuzuv.

      3) "content" accordionning content qismida chiqadigan joyi, tanasi. "content" qiymat sifatida JSX yoki komponent olishi kerak.
*/

export default function Accordion({ children, title }) {
   const { isDarkMode } = useContext(ProductsData);
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className={styles.main}>
         <div className={styles[`label-forFAQ`]}>
            <div
               className={
                  `${isDarkMode ? styles.darkMode + " " : ""} ` +
                  styles[`label-forFAQ_text`] +
                  (isOpen ? " " + styles[`label-forFAQ_text--open`] : "")
               }
               onClick={() => setIsOpen(!isOpen)}
            >
               <p>{title}</p>
            </div>
         </div>
         <div
            className={
               styles.content + (isOpen ? " " + styles["content--open"] : "")
            }
         >
            {children}
         </div>
      </div>
   );
}
