import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Card from "../../components/card/Card";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import { ProductsData } from "../../contexts/context";
import styles from "./products.module.scss";

export default function Products() {
   const { products, isDarkMode, isLoggedIn } = useContext(ProductsData);
   if (!isLoggedIn) {
      return <Navigate to={"/sign-in"} />;
   }
   return (
      <div className={isDarkMode ? styles.darkMode : ""}>
         <div className={styles.container}>
            <div className={styles.heading}>
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                  }}
                  action=""
                  className={styles.searchGroup + " " + styles.searchText}
               >
                  <button className={styles.searchBtn}>
                     <img src="/assets//images/icon-search.svg" alt="" />
                  </button>
                  <input
                     className={styles.searchInput}
                     placeholder="Search"
                     type="text"
                  />
               </form>
               <div className={styles.searchGroup + " " + styles.select}>
                  <label className={styles.selectLabel} htmlFor="111">
                     Sort by
                  </label>
                  <select className={styles.selectOption} name="" id="111">
                     <option value="expensive">Most expensive</option>
                  </select>
               </div>
            </div>
            <Categories />
            <div className={styles.cardWrapper}>
               {products.map((product) => (
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
