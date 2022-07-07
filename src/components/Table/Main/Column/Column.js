import React from 'react';

import styles from "./Column.module.scss";
import {useTableProps} from "../../../../contexts/ComplexTable/ComplexTable";

const Column = ({children, column: {width, headerName}, ...props}) => {
    const {
        components: {
            ColumnTitle,
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
            <ColumnTitle text={headerName}/>
            {children}
            <ColumnResizeIcon/>
        </div>
    );
};

export default Column;