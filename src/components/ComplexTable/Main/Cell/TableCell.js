import React from 'react';
import styles from "./TableCell.module.scss";

const TableCell = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default TableCell;