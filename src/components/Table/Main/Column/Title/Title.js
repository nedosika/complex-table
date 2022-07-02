import React from 'react';

import styles from "./Title.module.scss";

const Title = ({children, content, toggle}) => {
    return (
        <div className={styles.root} onClick={toggle}>
            <div className={styles.content} >{content}</div>
            {children}
        </div>
    );
};

export default Title;