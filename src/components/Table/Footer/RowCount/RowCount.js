import React from 'react';
import styles from "./RowCount.module.scss";

const RowCount = ({count}) => {
    return (
        <div className={styles.root}>
            {count} row{count > 1 && 's'} selected
        </div>
    );
};

export default RowCount;