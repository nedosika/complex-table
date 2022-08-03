import React from "react";
import styles from "./TableRow.module.scss";
import { useTableProps } from "../../../ComplexTable/ComplexTable";

const TableRow = ({ children, row, sx, ...props }) => {
  const {
    columns,
    getRowHeight,
    components: { Cell },
  } = useTableProps();

  return (
    <tr
      className={styles.root}
      style={{ height: getRowHeight(row), ...sx }}
      {...props}
    >
      {children}
      {columns.map(({ field }) =>
          row[field] !== undefined && <Cell
          key={field}
          colSpan={row.colspan && row.colspan[field]}
        >
          {row[field]}
        </Cell>
      )}
    </tr>
  );
};

export default TableRow;
