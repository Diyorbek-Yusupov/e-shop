import React, { useContext, useEffect, useState } from "react";
import styles from "./home.module.scss";
import BlogBanner from "../../components/blogBanner/BlogBanner";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Categories from "../../components/categories/Categories";
import Showcase from "../../components/showcase/Showcase";
import Sliders from "../../components/slider/Sliders";
import SubBanner from "../../components/subBanner/SubBanner";
import Title from "../../components/title/Title";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import { ProductsData } from "../../contexts/context";
import { Navigate } from "react-router-dom";

function Home() {
   const [bannerProductIndex, setBannerProductIndex] = useState(null);
   const { products, isDarkMode, isLoggedIn } = useContext(ProductsData);

   const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
   };

   useEffect(() => {
      setBannerProductIndex(randomNumber(0, 13));
   }, [null]);

   if (!isLoggedIn) {
      return <Navigate to={"/sign-in"} />;
   }

   return (
      <div className={`${isDarkMode ? styles.darkMode : ""} ${styles.home}`}>
         <div className={styles.container}>
            {bannerProductIndex ? (
               <Showcase
                  img={products[bannerProductIndex].image}
                  title={products[bannerProductIndex].title}
                  description={products[bannerProductIndex].description}
                  price={products[bannerProductIndex].price}
                  id={products[bannerProductIndex].id}
                  isDarkMode={isDarkMode}
               />
            ) : (
               ""
            )}
            <SubBanner isDarkMode={isDarkMode} />
            <div className={styles.titleWrapper}>
               <Title>Our products.</Title>
               <Button bg={"light"}>Go to our blog</Button>
            </div>
            <Categories />
            <div className={styles.cardWrapper}>
               {products.slice(0, 6).map((product) => (
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
            <div className={styles.titleWrapper}>
               <Title>Our blog.</Title>
               <Button bg={"light"}>Go to our blog</Button>
            </div>
            <div className={styles.blogBannerWrapper}>
               <BlogBanner
                  isDarkMode={isDarkMode}
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  desc={
                     "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months..."
                  }
                  img={"/assets//images/blogBanner1.png"}
               />
               <BlogBanner
                  isDarkMode={isDarkMode}
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  desc={
                     "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months..."
                  }
                  img={"/assets//images/blogBanner2.png"}
               />
               <BlogBanner
                  isDarkMode={isDarkMode}
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  img={"/assets//images/blogBanner3.png"}
               />
               <BlogBanner
                  isDarkMode={isDarkMode}
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  img={"/assets//images/blogBanner3.png"}
               />
            </div>
            <Title mb={44} align="center">
               What out clients say
            </Title>
            <Sliders />
            <About />
         </div>
         <Footer />
      </div>
   );
}
export default Home;
