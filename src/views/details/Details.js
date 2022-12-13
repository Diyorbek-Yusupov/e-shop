import React from "react";
import DetailTable from "../../components/detailTable/DetailTable";
import Faq from "../../components/faq/Faq";
import ProductDesc from "../../components/productDesc/ProductDesc";
import Title from "../../components/title/Title";
import styles from "./details.module.scss";

export default function Details() {
   return (
      <>
         <div className={styles.container}>
            <div className={styles.showcase}>
               <div>
                  <img
                     className={styles.productImg}
                     src="./assets/images/details.png"
                     alt=""
                  />
               </div>
               <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>
                     SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                     Planting
                  </h3>
                  <div className={styles.productType}>
                     <img src="./assets/images/category1.svg" alt="" />
                     VEGETABLES
                  </div>
                  <DetailTable />
               </div>
            </div>
            <Title mb={24}>Product information.</Title>
            <ProductDesc />
            <Title mb={23}>Frequently asked questions.</Title>
            <Faq />
         </div>
      </>
   );
}
