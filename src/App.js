import React from "react";
import styles from "./App.module.scss";
import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Categories from "./components/categories/Categories";
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
            <Categories />
            <div className={styles.cardWrapper}>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </div>
         </div>
      </div>
   );
}

export default App;
