import React from 'react';

import styles from "./Title.module.scss";

const Title = ({children, content}) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>{content}</div>
            {children}
        </div>
    );
};

export default Title;