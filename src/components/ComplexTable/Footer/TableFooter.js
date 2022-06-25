import React from 'react';
import styles from "./TableFooter.module.scss";

const TableFooter = ({children}) => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    );
};

export default TableFooter;