import React from "react";
import styles from "./clientCard.module.scss";

export default function ClientCard() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.heading}>
            <div className={styles.clientInfo}>
               <img src="/assets/images/client-img.png" alt="" />
               <div>
                  <h4 className={styles.clientName}>Carla Samantoes-Diego</h4>
                  <p className={styles.clientDesc}>
                     Reviewed in the United States on June 18, 2021
                  </p>
               </div>
            </div>
            <div className={styles.stars}>
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
               <img src="/assets/images/icon-star.svg" alt="" />
            </div>
         </div>
         <p className={styles.comment}>
            SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
            professional instructions created by PhD Helga George Be sure of our
            quality - the freshest batches of this season. Non-GMO, Heirloom -
            our seeds were tested and have the best germination ratings.
         </p>
         <div className={styles.bottom}>
            <p className={styles.text}>
               <span>Size</span>2 PACK
            </p>
            <div className={styles.verify}>
               <img src="/assets/images/icon-checked.svg" alt="" />
               VERIFIED
            </div>
         </div>
      </div>
   );
}
