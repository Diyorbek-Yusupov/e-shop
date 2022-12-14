import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar() {
   const [navIsOpen, setNavIsOpen] = useState(false);

   const togleNavbar = () => setNavIsOpen((prevState) => !prevState);
   return (
      <>
         {navIsOpen && (
            <div className={styles.overlay} onClick={togleNavbar}></div>
         )}
         <div className={styles.navbar}>
            <div className={styles.container}>
               <Link to={"/"} className={styles.logo} href="">
                  <img src="/assets/images/logo.svg" alt="" />
               </Link>
               <ul
                  className={`${styles.content} ${
                     navIsOpen ? styles.openNav : ""
                  }`}
               >
                  <ul className={styles.navigations}>
                     <li className={styles.navigation}>
                        <Link to={"/products"}>ALL PRODUCTS</Link>
                     </li>
                     <li className={styles.navigation}>ABOUT SEEDRA</li>
                     <li className={styles.navigation}>OUR BLOG</li>
                     <li className={styles.navigation}>CONTACTS</li>
                  </ul>
                  <ul className={styles.socials}>
                     <li className={styles.social}>
                        <img src="/assets/images/icon-facebook.svg" alt="" />
                     </li>
                     <li className={styles.social}>
                        <img src="/assets/images/icon-instagram.svg" alt="" />
                     </li>
                  </ul>
                  <form
                     onSubmit={(e) => {
                        e.preventDefault();
                     }}
                     action=""
                     className={styles.form}
                  >
                     <button className={styles["form-btn"]}>
                        <img src="/assets/images/icon-search.svg" alt="" />
                     </button>
                     <input
                        placeholder="Search"
                        type="text"
                        className={styles["form-input"]}
                     />
                  </form>
               </ul>
               <div className={styles.btns}>
                  <button>
                     <img src="/assets/images/icon-like.svg" alt="" />
                  </button>
                  <button>
                     <img src="/assets/images/icon-cart.svg" alt="" />
                  </button>
                  <button onClick={togleNavbar} className={styles.burgerBtn}>
                     <img src="/assets/images/icon-burger.svg" alt="" />
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
