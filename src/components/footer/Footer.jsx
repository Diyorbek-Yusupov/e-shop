import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
   return (
      <div className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.links}>
               <a href="">ALL PRODUCTS</a>
               <a href="">ABOUT SEEDRA</a>
               <a href="">OUR BLOG</a>
               <a className={styles.logo} href="">
                  <img src="./assets/images/logo.svg" alt="" />
               </a>
               <a href="">Terms&Conditions</a>
               <a href="">Privacy Policy</a>
            </div>
            <div className={styles.bottom}>
               <div className={styles.socials}>
                  <a href="">
                     <img src="./assets/images/footer-insta.svg" alt="" />
                  </a>
                  <a href="">
                     <img src="./assets/images/footer-facebook.svg" alt="" />
                  </a>
               </div>
               <p className={styles.copyright}>All rights reserved</p>
            </div>
         </div>
      </div>
   );
}
