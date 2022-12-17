import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsData } from "../../contexts/context";
import { useRateStars } from "../../hooks/useRateStars";
import styles from "./card.module.scss";

export default function Card(props) {
   const { isDarkMode } = useContext(ProductsData);
   const { img, title, rate, voteNumber, price, category, id } = props;
   const stars = useRateStars(rate);
   let slicedTitle = title.slice(0, 30);
   if (slicedTitle.length < title.length) slicedTitle += " . . .";

   return (
      <div className={`${isDarkMode ? styles.darkMode : ""} ${styles.card}`}>
         <button className={styles.likeBtn}>
            <img src="/assets/images/icon-like.svg" alt="" />
         </button>
         <div className={styles.imgBox}>
            <img src={img} className={styles.productImg} alt={title} />
         </div>
         <div className={styles.status}>
            <div className={styles.stars}>{stars}</div>
            <div className={styles.count}>({voteNumber})</div>
            <span className={styles.category}> {category}</span>
         </div>
         <Link
            to={`/products/${id}`}
            className={styles.productDesc}
            title={title}
         >
            {slicedTitle}
         </Link>
         <div className={styles.footer}>
            <h3 className={styles.price}>${price}</h3>
            <button className={styles.btn}>
               <img src="/assets/images/icon-cart.svg" alt="" />
            </button>
         </div>
      </div>
   );
}
