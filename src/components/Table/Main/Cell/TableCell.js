import React from 'react';
import styles from "./TableCell.module.scss";

const TableCell = ({children, sx}) => {
    return (
        <td className={styles.root} style={sx}>
            {children}
        </td>
    )
};

export default TableCell;