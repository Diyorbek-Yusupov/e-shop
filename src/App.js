import React from "react";
import styles from "./App.module.scss";
import Button from "./components/button/Button";
import Navbar from "./components/navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import SubBanner from "./components/subBanner/SubBanner";
import Title from "./components/title/Title";

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
            <div className={styles.categories}>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category1.svg" alt="" />
                  ALL
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category2.svg" alt="" />
                  BUNDLES
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category3.svg" alt="" />
                  HERBS
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category4.svg" alt="" />
                  VEGETABLES
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category5.svg" alt="" />
                  FRUITS
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category6.svg" alt="" />
                  SUPPLIES
               </Button>
               <Button category={true} bg={"light"}>
                  <img src="./assets/images/category7.svg" alt="" />
                  FLOWERS
               </Button>
            </div>
         </div>
      </div>
   );
}

export default App;
