import React from 'react';

import styles from "./TableColumn.module.scss";
import {useTableProps} from "../../../../contexts/ComplexTable/ComplexTable";

const TableColumn = ({children, column: {width, headerName}, ...props}) => {
    const {
        components: {
            ColumnTitle,
            ColumnMenu,
            ColumnResizeIcon,
        }
    } = useTableProps();

    return (
        <div
            {...props}
            className={styles.root}
            style={{
                minWidth: width,
                maxWidth: width
            }}
        >
            <ColumnTitle>
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