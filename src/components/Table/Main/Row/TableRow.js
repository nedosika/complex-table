import React from "react";
import styles from "./TableRow.module.scss";
import { useTableProps } from "../../../../contexts/ComplexTable/ComplexTable";

const TableRow = ({ row, sx }) => {
  const {
    columnsToShow: columns,
    components: { Cell },
  } = useTableProps();

  return (
    <tr className={styles.root} style={sx}>
      {columns.map(({ field }) => (
        <Cell key={field}>
          {row[field]}
        </Cell>
      ))}
    </tr>
  );
};

export default TableRow;
