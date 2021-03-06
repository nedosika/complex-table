import React from 'react';
import styles from "./ColumnResizeIcon.module.scss";

const ColumnResizeIcon = () => {
    return (
        <div className={styles.root}>
            <svg focusable="false" viewBox="0 0 24 24">
                <path d="M11 19V5h2v14z"/>
            </svg>
        </div>
    );
};

export default ColumnResizeIcon;