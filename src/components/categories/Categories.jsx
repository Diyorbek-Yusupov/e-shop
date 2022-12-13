import React from "react";
import Button from "../button/Button";
import styles from "./categories.module.scss";

export default function Categories() {
   return (
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
   );
}
