import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children}) => {
    return (
        <div
            className={styles.root}
        >
            {children}
        </div>
    );
};

export default TableRow;