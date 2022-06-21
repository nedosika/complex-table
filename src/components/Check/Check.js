import React from 'react';
import styles from "./Check.module.scss";

const Check = () => {
    return (
        <div className={styles.root}>
            <span>
                <input type="checkbox"/>
            </span>
        </div>
    );
};

export default Check;