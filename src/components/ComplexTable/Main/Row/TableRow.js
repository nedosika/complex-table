import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, width = 50}) => {
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

export default TableRow;