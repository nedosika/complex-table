import React from 'react';
import styles from "./Title.module.scss";

const Title = ({children}) => {
    return (
        <div className={styles.root}>
            {children}
        </div>
    );
};

export default Title;