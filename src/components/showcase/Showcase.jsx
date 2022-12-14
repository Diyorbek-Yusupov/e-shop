import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./showcase.module.scss";

export default function Showcase({ img, title, description, price, id }) {
   const textReducer = (text, maxCharNum) => {
      let sliced = text.slice(0, maxCharNum);
      if (sliced.length < text.length) return sliced + " . . .";
      return sliced;
   };
   return (
      <div className={styles.showcase}>
         <div className={styles.contentWrapper}>
            <div className={styles.content}>
               <h2 className={styles.title} title={title}>
                  {textReducer(title, 40)}
               </h2>
               <p className={styles.desc} title={description}>
                  {textReducer(description, 200)}
               </p>
               <div className={styles.productInfo}>
                  <span className={styles.icon}>
                     <img
                        className={styles.fireIcon}
                        src="/assets/images/icon-fire.svg"
                        alt=""
                     />
                  </span>
                  <h3 className={styles.productPrice}>${price}</h3>
                  <h5 className={styles.deprecatedPrice}>
                     ${Math.round((price * 0.1 + price) * 100) / 100}
                  </h5>
               </div>
               <div className={styles.btns}>
                  <Button bg="green">Add to card</Button>
                  <Link to={`/products/${id}`}>
                     <Button bg="light">Discover</Button>
                  </Link>
               </div>
            </div>
            <div className={styles.images}>
               <img
                  className={styles.productImg}
                  // "/assets/images/showcase-img.png"
                  src={img}
                  alt=""
               />
            </div>
         </div>
         <img
            className={styles.productBg}
            src="/assets/images/showcase-bg.png"
            alt=""
         />
      </div>
   );
}
