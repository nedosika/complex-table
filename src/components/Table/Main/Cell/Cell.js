import React from "react";
import styles from "./TableCell.module.scss";

const Cell = ({ children, ...props }) => {
  return (
    <td className={styles.root} {...props}>
      {children}
    </td>
  );
};

export default Cell;
