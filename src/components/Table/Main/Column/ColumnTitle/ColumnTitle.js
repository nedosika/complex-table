import React from 'react';

import styles from "./Title.module.scss";

const ColumnTitle = ({children, text, ...props}) => {
    return (
        <div className={styles.root} {...props}>
            <div className={styles.columnName}>{text}</div>
            {children}
        </div>
    );
};

export default ColumnTitle;