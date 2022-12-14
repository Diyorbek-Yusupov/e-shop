import React from "react";
import styles from "./blogBanner.module.scss";
import Button from "../button/Button";

export default function BlogBanner({ time, title, desc, img }) {
   return (
      <div className={styles.blogBanner}>
         <div className={styles.content}>
            <div className={styles.time}>
               <img src="/assets/images/icon-clock.svg" alt="" />
               <span className={styles.date}>{time}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.desc}>{desc}</p>
            <Button bg={"light"}>Read</Button>
         </div>
         <img className={styles.img} src={img} alt="" />
      </div>
   );
}
