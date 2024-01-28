import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, id, buttonImg }) => {
  return (
    <div
      className={[
        styles.buttonContainer,
        id % 2 === 0 && styles.reverseStyles,
      ].join(" ")}
      onClick={onClick}
    >
      <div className={styles.buttonImg}>{buttonImg}</div>
    </div>
  );
};

export default Button;
