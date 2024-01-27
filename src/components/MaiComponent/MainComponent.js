import React from "react";
import styles from "./MainComponent.module.css";

import Button from "../Button/Button";
const MainComponent = ({ id, title, info, img, headerIcon }) => {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.step}>Step {id}</p>
          <img src={headerIcon} alt="#" className={styles.headerIcon} />
        </div>
        <h2
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <p className={styles.info}>{info}</p>
        <div className={styles.imgAndButton}>
          <img src={img} alt="#" className={styles.img} />
          <Button id={id} onClick={() => {}} />
          {id % 2 !== 0 && (
            <div className={styles.elipse}>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
