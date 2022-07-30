import React from 'react';
import styles from "./TableCell.module.scss";

const TableCell = ({children, sx, ...props}) => {
    return (
        <td className={styles.root} style={sx} {...props}>
            {children}
        </td>
    )
};

export default TableCell;