import React from 'react';
import styles from "./TableColumn.module.scss";

const TableColumn = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default TableColumn;