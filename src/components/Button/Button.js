import React from "react";
import styles from "./Button.module.css";
import { buttonImg } from "../../images";
const Button = ({ onClick, id }) => {
  return (
    <div
      className={[
        styles.buttonContainer,
        id % 2 === 0 && styles.reverseStyles,
      ].join(" ")}
    >
      <img src={buttonImg} alt="#" className={styles.buttonImg} />
    </div>
  );
};

export default Button;
