import React from 'react';
import styles from "../../modules/ColumnMenuBuilder/ColumnMenuItem/ColumnMenuItem.module.scss";

const ToolbarColumnItem = ({children, isChecked}) =>
    <label htmlFor='menuItem' className={styles.root}>
        <input id='menuItem' type='checkbox' defaultChecked={isChecked}/>{children}
    </label>

export default ToolbarColumnItem;