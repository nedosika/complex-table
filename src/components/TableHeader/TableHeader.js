import React from 'react';
import styles from "./styles.module.scss";

const TableHeader = () => {
    return (
        <div className={styles.root}>
            <div className={styles.column}>
                <div className={styles.check}>
                    <span>
                        <input type="checkbox"/>
                    </span>
                </div>
                <div className={styles.separator}>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M11 19V5h2v14z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>ID</div>
                <div className={styles.separator}>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M11 19V5h2v14z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>First name</div>
                <div className={styles.separator}>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M11 19V5h2v14z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>Last name</div>
                <div className={styles.separator}>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M11 19V5h2v14z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.title}>Age</div>
                <div className={styles.separator}>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M11 19V5h2v14z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TableHeader;