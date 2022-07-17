import React from 'react';
import styles from "./TableRow.module.scss";
import {useTableProps} from "../../../../contexts/ComplexTable/ComplexTable";

const TableRow = ({children, row, sx, ...props}) => {
    const {
        columnsToShow: columns,
        components: {
            Cell,
        }
    } = useTableProps();

    return (
        <div className={styles.root} style={sx} {...props}>
            {children}
            {
                columns.map(({width, field}) =>
                    <Cell  width={width} key={field}>{row[field]}</Cell>
                )}
        </div>
    );
};

export default TableRow;