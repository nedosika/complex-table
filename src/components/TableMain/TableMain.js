import React from 'react';
import styles from "./styles.module.css";

const TableMain = () => {
    return (
        <div className={styles.root}>
            <div className={styles.row}>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
            </div>
            <div className={styles.row}>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
                <div className={styles.cell}>Test</div>
            </div>
        </div>
    );
};

export default TableMain;