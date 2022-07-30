import React from "react";

import styles from "./TableMain.module.scss";
import { useTableProps } from "../../../contexts/ComplexTable/ComplexTable";

const TableMain = () => {
  const {
    rows,
    getRowId,
    components: { Row },
  } = useTableProps();

  return (
    <tbody className={styles.root}>
      {rows.map((row) => (
        <Row row={row} key={getRowId(row)} />
      ))}
    </tbody>
  );
};

export default TableMain;
