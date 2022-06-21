import React from 'react';
import styles from "./TableFooter.module.scss";
import Pagination from "./Pagination";

const TableFooter = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.rowCount}>
                    1 row selected
                </div>
                <Pagination/>
            </div>
        </div>
    );
};

export default TableFooter;