import React from "react";
import Button from "../button/Button";
import styles from "./showcase.module.scss";

export default function Showcase() {
   return (
      <div className={styles.showcase}>
         <div className={styles.contentWrapper}>
            <div className={styles.content}>
               <h2 className={styles.title}>
                  SEEDRA Basil Seeds for Indoor and Outdoor Planting
               </h2>
               <p className={styles.desc}>
                  Be sure of our quality - the freshest batches of this season.
                  Non-GMO, Heirloom - our seeds were tested and have the best
                  germination ratings. Your easy growing experience is our
                  guarantee
               </p>
               <div className={styles.productInfo}>
                  <span className={styles.icon}>
                     <img
                        className={styles.fireIcon}
                        src="./assets/images/icon-fire.svg"
                        alt=""
                     />
                  </span>
                  <h3 className={styles.productPrice}>$12.56</h3>
                  <h5 className={styles.deprecatedPrice}>$15.56</h5>
               </div>
               <div className={styles.btns}>
                  <Button bg="green">Add to card</Button>
                  <Button bg="light">Discover</Button>
               </div>
            </div>
            <div className={styles.images}>
               <img
                  className={styles.productImg}
                  src="./assets/images/showcase-img.png"
                  alt=""
               />
            </div>
         </div>
         <img
            className={styles.productBg}
            src="./assets/images/showcase-bg.png"
            alt=""
         />
      </div>
   );
}
