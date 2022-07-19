import React from "react";

import styles from "./TableMain.module.scss";
import { useTableProps } from "../../../contexts/ComplexTable/ComplexTable";

const TableMain = () => {
  const {
    rowsToShow: rows,
    getRowId,
    components: { Row, Header },
  } = useTableProps();

  return (
    <tbody className={styles.root}>
      <Header />
      {rows.map((row) => (
        <Row row={row} key={getRowId(row)} />
      ))}
    </tbody>
  );
};

export default TableMain;
