import React from "react";
import styles from "./TableRow.module.scss";
import { useTableProps } from "../../../../contexts/ComplexTable/ComplexTable";

const TableRow = ({ children, row, sx, ...props }) => {
  const {
    columns,
    getRowHeight,
    components: { Cell },
  } = useTableProps();

  return (
    <tr className={styles.root} style={{ height: getRowHeight(row), ...sx }} {...props}>
      {children}
      {columns.map(({ field }) => (
        <Cell key={field}>
          {row[field]}
        </Cell>
      ))}
    </tr>
  );
};

export default TableRow;
