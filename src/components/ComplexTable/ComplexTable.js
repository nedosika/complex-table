import React from 'react';
import TableMain from "../TableMain";
import styles from "./ComplexTable.module.scss";
import TableFooter from "../TableFooter";

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