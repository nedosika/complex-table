import React from 'react';
import styles from "./RowCounter.module.scss";

const RowCounter = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default RowCounter;