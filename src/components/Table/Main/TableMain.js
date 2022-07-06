import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({rows = [], columns = [], getRowId, components, componentsProps = {}}) => {
    const {Header, Row, Cell, ColumnTitle, ColumnMenu, Column, ColumnResizeIcon} = components;
    const {Header: headerProps, Row: rowProps, Cell: cellProps, ColumnTitle: titleProps, Column: columnProps} = componentsProps;
    return (
        <div className={styles.root}>
            <Header
                {...headerProps}
                columns={columns}
                components={{ColumnTitle, ColumnMenu, Column, ColumnResizeIcon}}
                componentsProps={{ColumnTitle: titleProps, Column: columnProps}}
            />
            {
                rows.map((row) =>
                    <Row
                        {...rowProps}
                        columns={columns}
                        row={row}
                        components={{Cell}}
                        componentsProps={{Cell: cellProps}}
                        key={getRowId(row)}
                    />
                )
            }
        </div>
    );
};

export default TableMain;