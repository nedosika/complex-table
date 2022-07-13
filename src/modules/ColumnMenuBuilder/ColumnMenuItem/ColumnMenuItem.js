import React from 'react';
import styles from "./ColumnMenuItem.module.scss";

const ColumnMenuItem = ({children, isChecked}) =>
    <label htmlFor='menuItem' className={styles.root}>
        <input id='menuItem' type='checkbox' defaultChecked={isChecked}/>{children}
    </label>

export default ColumnMenuItem;