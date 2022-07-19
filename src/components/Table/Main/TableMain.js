import React from "react";

import styles from "./TableMain.module.scss";
import { useTableProps } from "../../../contexts/ComplexTable/ComplexTable";

const TableMain = () => {
  const {
    columnsToShow: columns,
    rowsToShow: rows,
    getRowId,
    getRowHeight,
    components: { Row, Header },
  } = useTableProps();

  return (
    <tbody className={styles.root}>
      <Header />
      {rows.map((row) => (
        <Row row={row} key={getRowId(row)} sx={{ height: getRowHeight(row) }} />
      ))}
    </tbody>
  );

  // return (
  //     <div className={styles.root}>
  //         {/*<Header/>*/}
  //         {
  //             rows.map((row) =>
  //                 <Row
  //                     row={row}
  //                     key={getRowId(row)}
  //                 />
  //             )
  //         }
  //     </div>
  // );
};

export default TableMain;
