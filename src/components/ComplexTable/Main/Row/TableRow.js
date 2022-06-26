import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, items = [], renderItem}) => {
    return (
        <div className={styles.root}>
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableRow;