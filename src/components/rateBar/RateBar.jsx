import React from "react";
import { useRateStars } from "../../hooks/useRateStars";
import styles from "./rateBar.module.scss";

export default function RateBar({ rating }) {
   const stars = useRateStars(rating.rate);

   return (
      <div className={styles.wrapper}>
         <div className={styles.heading}>
            <h3 className={styles.everageRate}>{rating.rate}</h3>
            <div className={styles.reviews}>
               <span>{rating.count} reviews</span>
               <div className={styles.iconRates}>{stars}</div>
            </div>
         </div>
         <div className={styles.barRow}>
            <span className={styles.starNumber}>5</span>
            <img src="/assets/images/icon-star.svg" alt="" />
            <div className={styles.line}>
               <span className={styles.process} style={{ width: "81%" }}></span>
            </div>
            <span className={styles.voteNumber}>81</span>
         </div>
         <div className={styles.barRow}>
            <span className={styles.starNumber}>4</span>
            <img src="/assets/images/icon-star.svg" alt="" />
            <div className={styles.line}>
               <span className={styles.process} style={{ width: "45%" }}></span>
            </div>
            <span className={styles.voteNumber}>45</span>
         </div>
         <div className={styles.barRow}>
            <span className={styles.starNumber}>3</span>
            <img src="/assets/images/icon-star.svg" alt="" />
            <div className={styles.line}>
               <span className={styles.process} style={{ width: "32%" }}></span>
            </div>
            <span className={styles.voteNumber}>32</span>
         </div>
         <div className={styles.barRow}>
            <span className={styles.starNumber}>2</span>
            <img src="/assets/images/icon-star.svg" alt="" />
            <div className={styles.line}>
               <span className={styles.process} style={{ width: "1%" }}></span>
            </div>
            <span className={styles.voteNumber}>1</span>
         </div>
         <div className={styles.barRow}>
            <span className={styles.starNumber}>1</span>
            <img src="/assets/images/icon-star.svg" alt="" />
            <div className={styles.line}>
               <span className={styles.process} style={{ width: "1%" }}></span>
            </div>
            <span className={styles.voteNumber}>1</span>
         </div>
      </div>
   );
}
