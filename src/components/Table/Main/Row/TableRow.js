import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, columns = [], row, components, componentsProps, sx, ...props}) => {
    const {Cell} = components;
    const {Cell: cellProps} = componentsProps;

    return (
        <div className={styles.root} style={sx} {...props}>
            {children}
            {
                columns.map(({width, field}) =>
                    <Cell {...cellProps} width={width} key={field}>{row[field]}</Cell>
                )}
        </div>
    );
};

export default TableRow;