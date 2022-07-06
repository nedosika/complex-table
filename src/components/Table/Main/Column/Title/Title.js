import React from 'react';

import styles from "./Title.module.scss";

const Title = ({children, ...props}) => {
    return (
        <div className={styles.root} {...props}>
            {children}
        </div>
    );
};

export default Title;