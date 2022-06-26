import React from 'react';

import styles from "./TableHeader.module.scss";

const TableHeader = ({columns, renderColumn, children}) => {
    return (
        <div className={styles.root}>
            {children}
            {columns.map(renderColumn)}
        </div>
    );
};

export default TableHeader;