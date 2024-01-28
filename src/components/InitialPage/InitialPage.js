import React from "react";
import styles from "./InitialPage.module.css";

const InitialPage = ({ title, img, icon, totalSteps, buttonImg }) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.icon}>{icon}</div>
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
          <div className={styles.buttonImg}>{buttonImg}</div>
        </div>
      </div>
    </section>
  );
};

export default InitialPage;
