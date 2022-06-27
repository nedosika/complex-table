import React from 'react';

import styles from "./TableHeader.module.scss";

const TableHeader = ({items, renderItem, children}) => {
    return (
        <div className={styles.root}>
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableHeader;