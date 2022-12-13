import React from "react";
import styles from "./card.module.scss";

export default function Card() {
   return (
      <div className={styles.card}>
         <button className={styles.likeBtn}>
            <img src="./assets/images/icon-like.svg" alt="" />
         </button>
         <img
            src="./assets/images/product1.png"
            className={styles.productImg}
         />
         <div className={styles.status}>
            <div className={styles.stars}>
               <img src="./assets/images/icon-star.svg" alt="" />
               <img src="./assets/images/icon-star.svg" alt="" />
               <img src="./assets/images/icon-star.svg" alt="" />
               <img src="./assets/images/icon-star.svg" alt="" />
               <img src="./assets/images/icon-star.svg" alt="" />
            </div>
            <div className={styles.count}>(123)</div>
         </div>
         <a className={styles.productDesc} href="">
            Seedra Cilantro Seeds for Planting Indoor and Outdoor
         </a>
         <div className={styles.footer}>
            <h3 className={styles.price}>$12.56</h3>
            <button className={styles.btn}>
               <img src="./assets/images/icon-cart.svg" alt="" />
            </button>
         </div>
      </div>
   );
}
