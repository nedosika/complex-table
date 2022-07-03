import React from 'react';

import styles from "./TableColumn.module.scss";

const TableColumn = ({children, width = 50}) => {
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

export default TableColumn;