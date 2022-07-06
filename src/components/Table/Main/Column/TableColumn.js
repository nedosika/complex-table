import React from 'react';

import styles from "./TableColumn.module.scss";

const TableColumn = ({children, column: {width, headerName}, components, componentsProps, ...props}) => {
    const {ColumnTitle, ColumnMenu, ColumnResizeIcon} = components;
    const {ColumnTitle: titleProps} = componentsProps;

    return (
        <div
            {...props}
            className={styles.root}
            style={{
                minWidth: width,
                maxWidth: width
            }}
        >
            <ColumnTitle {...titleProps}>
                <div className={styles.columnName}>
                    {headerName}
                </div>
                {children}
            </ColumnTitle>
            <ColumnMenu/>
            <ColumnResizeIcon/>
        </div>
    );
};

export default TableColumn;