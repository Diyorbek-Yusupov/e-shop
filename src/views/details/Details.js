import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import ClientCard from "../../components/clientCard/ClientCard";
import DetailTable from "../../components/detailTable/DetailTable";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import ProductDesc from "../../components/productDesc/ProductDesc";
import RateBar from "../../components/rateBar/RateBar";
import Title from "../../components/title/Title";
import { ProductsData } from "../../contexts/context";
import styles from "./details.module.scss";

export default function Details() {
   const { products, isDarkMode } = useContext(ProductsData);
   const { id } = useParams();
   const currentProduct = products.find((product) => product.id === Number(id));
   return (
      <div className={isDarkMode ? styles.darkMode : ""}>
         <div className={styles.container}>
            <div className={styles.showcase}>
               <div>
                  <img
                     className={styles.productImg}
                     src={currentProduct.image}
                     alt=""
                  />
               </div>
               <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>
                     {currentProduct.title}
                  </h3>
                  <div className={styles.productType}>
                     <img src="/assets//images/category1.svg" alt="" />
                     {currentProduct.category}
                  </div>
                  <DetailTable price={currentProduct.price} />
               </div>
            </div>
            <Title mb={24}>Product information.</Title>
            <ProductDesc>{currentProduct.description}</ProductDesc>
            <Title mb={23}>Frequently asked questions.</Title>
            <Faq isDarkMode={isDarkMode} />
            <div className={styles.titleWrapper}>
               <Title>Customer reviews.</Title>
               <Button bg={"light"}>Make review</Button>
            </div>
            <div className={styles.reviewWrapper}>
               <RateBar rating={currentProduct.rating} />
               <ClientCard />
            </div>
            <Title mb={40}>Related products.</Title>
            <div className={styles.cardsWrapper}>
               {products
                  .filter(
                     (productItem) =>
                        productItem.category === currentProduct.category
                  )
                  .reduce((acc, curr) => {
                     if (acc.length < 3 && curr.id != currentProduct.id) {
                        return [...acc, curr];
                     }
                     return acc;
                  }, [])
                  .map((product) => (
                     <Card
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        img={product.image}
                        rate={product.rating.rate}
                        voteNumber={product.rating.count}
                     />
                  ))}
            </div>
         </div>
         <Footer />
      </div>
   );
}
