import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({items = [], renderItem, children}) => {
    return (
        <div className={styles.root}>
            {children}
            {items.map(renderItem)}
        </div>
    );
};

export default TableMain;