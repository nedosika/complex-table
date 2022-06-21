import React from 'react';
import styles from "./TableFooter.module.scss";
import Pagination from "../Pagination";

const TableFooter = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div>
                </div>
                <Pagination/>
            </div>
        </div>
    );
};

export default TableFooter;