import React from 'react';

import styles from "./TableHeader.module.scss";
import {useTableProps} from "../../../../contexts/ComplexTable/ComplexTable";

const TableHeader = ({children}) => {
    const {
        columnsToShow,
        components: {
            Column
        }
    } = useTableProps();

    return (
        <div className={styles.root}>
            {children}
            {columnsToShow.map((column) =>
                <Column column={column} key={column.field}/>
            )}
        </div>
    );
};

export default TableHeader;