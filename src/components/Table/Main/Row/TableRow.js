import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, items = [], renderItem, sx, ...props}) => {
    return (
        <div className={styles.root} style={{...sx}} {...props}>
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableRow;