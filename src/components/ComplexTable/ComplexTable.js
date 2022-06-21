import React from 'react';

import TableMain from "../TableMain";
import TableFooter from "../TableFooter";

import styles from "./ComplexTable.module.scss";

const ComplexTable = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <TableMain/>
                <TableFooter/>
            </div>
        </div>
    );
};

export default ComplexTable;