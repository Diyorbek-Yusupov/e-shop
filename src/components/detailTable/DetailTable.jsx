import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./detailTable.module.scss";

export default function DetailTable({ price }) {
   const [count, setCount] = useState(1);

   const flatZeros = (number) => {
      return Math.round(number * 100) / 100;
   };
   const increment = () => {
      setCount((count) => count + 1);
   };
   const decrement = () => {
      setCount((count) => {
         if (count > 0) {
            return (count -= 1);
         }
         return 0;
      });
   };
   return (
      <>
         <div className={styles.optionTitle}>
            <div className="">
               <span>Size</span>
               <p>{count} PACK</p>
            </div>
            <div className={styles.optionBtns}>
               <button onClick={decrement}>-</button>
               <span className={styles.optionCount}>{count}</span>
               <button onClick={increment}>+</button>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="qaz" name="birxil" type="radio" />
               <label htmlFor="qaz">1 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>${price}</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="wsx" name="birxil" type="radio" />
               <label htmlFor="wsx">2 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>${flatZeros(price * 2)}</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="edc" name="birxil" type="radio" />
               <label htmlFor="edc">3 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>${flatZeros(price * 3)}</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="rfv" name="birxil" type="radio" />
               <label htmlFor="rfv">4 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>${flatZeros(price * 4)}</h4>
            </div>
         </div>

         <div className={styles.bottom}>
            <div className={styles.priceInfo}>
               <h3 className={styles.oldPrice}>
                  ${flatZeros(count * price * 0.1 + count * price)}
               </h3>
               <h2 className={styles.currentPrice}>
                  ${flatZeros(count * price)}
               </h2>
            </div>
            <div className={styles.btns}>
               <button className={styles.likeBtn}>
                  <img src="/assets/images/icon-like.svg" alt="" />
               </button>
               <Button disabled={!count} bg={"green"}>
                  Add to card
               </Button>
            </div>
         </div>
      </>
   );
}
