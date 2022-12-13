import React from "react";
import styles from "./about.module.scss";
import Title from "../title/Title";

export default function about() {
   return (
      <div className={styles.about}>
         <div className={styles.content}>
            <Title mb={30}>Seedra helps to grow fast and efficiant</Title>
            <p className={styles.text}>
               SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
               professional instructions created by PhD Helga George
            </p>
            <p className={styles.text}>
               Be sure of our quality - the freshest batches of this season.
               Non-GMO, Heirloom - our seeds were tested and have the best
               germination ratings.
            </p>
            <p className={styles.text}>
               Your easy growing experience is our guarantee Spinach commom
               culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
               risotto, and more
            </p>

            <p className={styles.text}>
               Proudly sourced in the USA - our garden seeds are grown,
               harvested, and packaged in the USA. We support local farmers and
               are happy to produce this American-made product
            </p>
         </div>
         <div className={styles.imgWapper}>
            <img
               className={styles.img}
               src="./assets/images/about-img.png"
               alt=""
            />
         </div>
      </div>
   );
}
