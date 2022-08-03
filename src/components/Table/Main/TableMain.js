import React from "react";

import styles from "./TableMain.module.scss";
import { useTableProps } from "../../ComplexTable/ComplexTable";

const TableMain = () => {
  const {
    showedRows,
    getRowId,
    components: { Row },
  } = useTableProps();

  return (
    <tbody className={styles.root}>
      {showedRows.map((row) => (
        <Row row={row} key={getRowId(row)} />
      ))}
    </tbody>
  );
};

export default TableMain;
