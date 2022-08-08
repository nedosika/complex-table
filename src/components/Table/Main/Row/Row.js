import React from "react";
import styles from "./TableRow.module.scss";

const Row = ({ row, children, ...props }) => {
  return (
    <tr className={styles.root} {...props}>
      {children}
    </tr>
  );
};

export default Row;
