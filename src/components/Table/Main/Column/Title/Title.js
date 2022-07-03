import React from 'react';

import styles from "./Title.module.scss";

const Title = ({children, content, ...props}) => {
    return (
        <div className={styles.root} {...props}>
            <div className={styles.content} >{content}</div>
            {children}
        </div>
    );
};

export default Title;