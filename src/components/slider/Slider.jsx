import React, { useContext } from "react";
import { ProductsData } from "../../contexts/context";
import styles from "./slider.module.scss";

export default function Slider() {
   const { isDarkMode } = useContext(ProductsData);
   return (
      <div>
         <div className={`${isDarkMode ? styles.darkMode : ""} ${styles.card}`}>
            <div className={styles.heading}>
               <img src="/assets/images/client-img.png" alt="" />
               <div className={styles.clientInfo}>
                  <p className={styles.clientName}>Carla Samantoes-Diego</p>
                  <span className={styles.date}>12.09.2021</span>
               </div>
            </div>
            <div className={styles.rate}>
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
            </div>
            <div className={styles.comment}>
               SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
               professional instructions created by PhD Helga George Be sure of
               our quality - the freshest batches of this season. Non-GMO,
               Heirloom - our seeds were tested and have the best germination
               ratings.
            </div>
         </div>
      </div>
   );
}
