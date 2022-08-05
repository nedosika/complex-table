import React from "react";
import styles from "./CheckBox.module.scss";

const CheckBox = ({ isChecked }) => {
  return (
    <div className={styles.root}>
      <span>
        <input type="checkbox" checked={isChecked} readOnly={true} />
      </span>
    </div>
  );
};

export default CheckBox;
