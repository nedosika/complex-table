import React from 'react';

import styles from "./Title.module.scss";

const Title = ({children, renderContent, ...props}) => {
    return (
        <div className={styles.root} {...props}>
            <div className={styles.content}>{renderContent}</div>
            {children}
        </div>
    );
};

export default Title;