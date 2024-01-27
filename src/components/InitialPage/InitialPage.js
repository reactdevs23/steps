import React from "react";
import styles from "./InitialPage.module.css";

import Button from "../Button/Button";
import { buttonImg } from "../../images";
const InitialPage = ({ title, img, icon, totalSteps }) => {
  return (
    <section className={styles.mainWrapper}>
      <img src={icon} alt="#" className={styles.icon} />
      <div className={styles.wrapper}>
        <h2 className={styles.steps}>{totalSteps}</h2>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <img src={img} alt="#" className={styles.img} />

        <div className={styles.buttonContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>{" "}
            <div className={styles.circle}></div>
          </div>{" "}
          <img src={buttonImg} alt="#" className={styles.buttonImg} />
        </div>
      </div>
    </section>
  );
};

export default InitialPage;
