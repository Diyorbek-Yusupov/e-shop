import React from "react";
import styles from "./App.module.scss";
import BlogBanner from "./components/blogBanner/BlogBanner";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Categories from "./components/categories/Categories";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import Slider from "./components/slider/Slider";
import Sliders from "./components/slider/Sliders";
import SubBanner from "./components/subBanner/SubBanner";
import Title from "./components/title/Title";
import About from "./components/about/About";

function App() {
   return (
      <div className="App">
         <Navbar />
         <div className={styles.container}>
            <Showcase />
            <SubBanner />
            <div className={styles.titleWrapper}>
               <Title>Our products.</Title>
               <Button bg={"light"}>Go to our blog</Button>
            </div>
            <Categories />
            <div className={styles.cardWrapper}>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
            <div className={styles.titleWrapper}>
               <Title>Our blog.</Title>
               <Button bg={"light"}>Go to our blog</Button>
            </div>
            <div className={styles.blogBannerWrapper}>
               <BlogBanner
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  desc={
                     "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months..."
                  }
                  img={"./assets/images/blogBanner1.png"}
               />
               <BlogBanner
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  desc={
                     "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months..."
                  }
                  img={"./assets/images/blogBanner2.png"}
               />
               <BlogBanner
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  img={"./assets/images/blogBanner3.png"}
               />
               <BlogBanner
                  time={"12.09.2021"}
                  title={"How to plant spinach correctly in winter"}
                  img={"./assets/images/blogBanner3.png"}
               />
            </div>
            <Title mb={44} align="center">
               What out clients say
            </Title>
            <Sliders />
            <About />
         </div>
      </div>
   );
}

export default App;
