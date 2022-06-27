import React from 'react';

import Sort from "../Sort";

import styles from "./Title.module.scss";

const Title = ({children}) => {
    return (
        <div className={styles.root}>
            <div className={styles.content}>{children}</div>
            <Sort/>
        </div>
    );
};

export default Title;