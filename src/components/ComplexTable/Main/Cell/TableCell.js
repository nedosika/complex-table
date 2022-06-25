import React from 'react';
import styles from "./TableCell.module.scss";

const TableCell = ({children, width}) => {
    return (
        <div
            className={styles.root}
            style={{
                minWidth: width,
                maxWidth: width
            }}
        >
            {children}
        </div>
    );
};

export default TableCell;