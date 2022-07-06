import React from 'react';

import styles from "./TableHeader.module.scss";

const TableHeader = ({children, columns = [], components, componentsProps}) => {
    const {ColumnTitle, ColumnMenu, Column, ColumnResizeIcon} = components;
    const {ColumnTitle: titleProps, Column: columnProps} = componentsProps;

    return (
        <div className={styles.root}>
            {children}
            {
                columns.map((column) =>
                    <Column
                        {...columnProps}
                        column={column}
                        components={{ColumnTitle, ColumnMenu, ColumnResizeIcon}}
                        componentsProps={{ColumnTitle: titleProps}}
                        key={column.field}
                    />
                )
            }
        </div>
    );
};

export default TableHeader;