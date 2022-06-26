import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({items = [], renderItem, renderHeader}) => {
    return (
        <div className={styles.root}>
            {renderHeader && renderHeader()}
            {items.map(renderItem)}
        </div>
    );
};

export default TableMain;