import React from "react";
import styles from "./ColumnMenuItem.module.scss";

const ColumnMenuItem = ({ children, isChecked, id}) => (
  <label htmlFor={id} className={styles.root} >
    <input id={id} type="checkbox" defaultChecked={isChecked}/>
    {children}
  </label>
);

export default ColumnMenuItem;
