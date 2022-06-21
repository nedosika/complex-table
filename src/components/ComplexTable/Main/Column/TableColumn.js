import React from 'react';
import styles from "./TableColumn.module.scss";

const TableColumn = ({children}) => {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                {children}
                <div className={styles.sort}>
                    <button type="button" title="Sort">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                        </svg>
                        <span/>
                    </button>
                </div>
            </div>
            <div className={styles.menu}>
                <button type="button" title="Menu">
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                    <span/>
                </button>
            </div>
            <div className={styles.separator}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M11 19V5h2v14z"/>
                </svg>
            </div>
        </div>
    );
};

export default TableColumn;