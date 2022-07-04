import React from 'react';

import styles from "./TableColumn.module.scss";

const TableColumn = ({children, column, renderTitle, renderSeparator}) => {
    return (
        <div
            className={styles.root}
            style={{
                minWidth: column.width,
                maxWidth: column.width
            }}
        >
            {renderTitle(column.headerName)}
            {children}
            {renderSeparator()}
        </div>
    );
};

export default TableColumn;