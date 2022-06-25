import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default TableMain;