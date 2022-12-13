import React from "react";
import Accordion from "../accordion/Accordion";
import Button from "../button/Button";
import styles from "./faq.module.scss";

export default function Faq() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Accordion
               title={
                  "For seller: are these seeds organic? it does matter if they are organic, seeds can hold pesticides from the plant they grow from."
               }
            >
               <p className={styles.quiz}>
                  I have heat mats and artificial light. I planted them in all
                  purpose potting soil. Moist not wet. Placed them on a heat
                  mat. If not available, somewhere where it's 72 degrees. Add
                  natural light, but I used artificial light. Takes 10- 15 days
                  because of there hard shell on the seed.
               </p>
            </Accordion>
            <Accordion title={"Can they be grown on hydroponic systems"}>
               <p className={styles.quiz}>
                  I have heat mats and artificial light. I planted them in all
                  purpose potting soil. Moist not wet. Placed them on a heat
                  mat. If not available, somewhere where it's 72 degrees. Add
                  natural light, but I used artificial light. Takes 10- 15 days
                  because of there hard shell on the seed.
               </p>
            </Accordion>
            <Accordion
               title={
                  "They did not germinate even when i followed directions. What should i do?"
               }
            >
               <p className={styles.quiz}>
                  I have heat mats and artificial light. I planted them in all
                  purpose potting soil. Moist not wet. Placed them on a heat
                  mat. If not available, somewhere where it's 72 degrees. Add
                  natural light, but I used artificial light. Takes 10- 15 days
                  because of there hard shell on the seed.
               </p>
            </Accordion>
         </div>
         <form className={styles.form}>
            <img
               className={styles.formBg}
               src="./assets/images/form-bg.png"
               alt=""
            />
            <h3 className={styles.formTitle}>Didn’t find answer?</h3>
            <p className={styles.formText}>Ask your own!</p>
            <textarea
               className={styles.formInput}
               name=""
               id=""
               cols="30"
               rows="10"
               placeholder="Type here"
            ></textarea>
            <Button bg={"green"}>Send</Button>
         </form>
      </div>
   );
}
