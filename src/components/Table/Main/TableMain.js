import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({items = [], renderItem, header, children}) => {
    return (
        <div className={styles.root}>
            {header}
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableMain;