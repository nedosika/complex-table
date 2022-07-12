import React from 'react';
import styles from "./ColumnMenuItem.module.scss";

const ColumnMenuItem = ({children, toggle, isChecked}) => {
    const handleClick = (event) => {
        event.stopPropagation();
        toggle();
    }

   return <label htmlFor='menuItem' className={styles.root} onClick={handleClick}>
        <input id='menuItem' type='checkbox' defaultChecked={isChecked}/>{children}
    </label>
}

export default ColumnMenuItem;