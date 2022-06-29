import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, items = [], renderItem, sx}) => {
    return (
        <div className={styles.root} style={{...sx}}>
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableRow;