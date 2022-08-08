import React from "react";
import styles from "./ColumnMenuItem.module.scss";
import MenuItem from "../../../Menu/MenuItem";

const ColumnMenuItem = ({ children, onClick, isChecked, id }) => {
  return (
    <MenuItem onClick={onClick}>
      <label htmlFor={id} className={styles.root}>
      <input id={id} type="checkbox" checked={isChecked} readOnly={true} />
      {children}
      </label>
    </MenuItem>
  );
};

export default ColumnMenuItem;
