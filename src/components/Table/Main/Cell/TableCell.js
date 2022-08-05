import React from "react";
import styles from "./TableCell.module.scss";

const TableCell = ({ children, ...props }) => {
  return (
    <td className={styles.root} {...props}>
      {children}
    </td>
  );
};

export default TableCell;
