import React from "react";
import Button from "../button/Button";
import styles from "./detailTable.module.scss";

export default function DetailTable() {
   return (
      <>
         <div className={styles.optionTitle}>
            <div className="">
               <span>Size</span>
               <p>2 PACK</p>
            </div>
            <div className={styles.optionBtns}>
               <button>-</button>
               <span className={styles.optionCount}>2</span>
               <button>+</button>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="qaz" name="birxil" type="radio" />
               <label htmlFor="qaz">1 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>$1,56</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="wsx" name="birxil" type="radio" />
               <label htmlFor="wsx">1 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>$1,56</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="edc" name="birxil" type="radio" />
               <label htmlFor="edc">1 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>$1,56</h4>
            </div>
         </div>
         <div className={styles.optionItem}>
            <div className={styles.optionValue}>
               <input id="rfv" name="birxil" type="radio" />
               <label htmlFor="rfv">1 pack</label>
            </div>
            <div className={styles.optionPrice}>
               <span>start from</span>
               <h4>$1,56</h4>
            </div>
         </div>
         <div className={styles.bottom}>
            <div className={styles.priceInfo}>
               <h3 className={styles.oldPrice}>$15.56</h3>
               <h2 className={styles.currentPrice}>$12.56</h2>
            </div>
            <div className={styles.btns}>
               <button className={styles.likeBtn}>
                  <img src="./assets/images/icon-like.svg" alt="" />
               </button>
               <Button bg={"green"}>Add to card</Button>
            </div>
         </div>
      </>
   );
}
