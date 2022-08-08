import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  onClick,
  children,
}) => {

  return (
      <span>
        <button
          className={styles.root}
          onClick={onClick}
        >
          <span className={styles.title}>{children}</span>
        </button>
      </span>
  );
};

export default Button;
