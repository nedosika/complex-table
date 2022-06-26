import React from 'react';

import styles from "./TableHeader.module.scss";

const TableHeader = ({columns, renderColumn, renderSelection}) => {
    return (
        <div className={styles.root}>
            {renderSelection && renderSelection()}
            {columns.map(renderColumn)}
        </div>
    );
};

export default TableHeader;