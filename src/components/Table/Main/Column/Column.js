import React from "react";

import styles from "./Column.module.scss";
import { useTableProps } from "../../../../contexts/ComplexTable/ComplexTable";

const Column = ({ children, column, ...props }) => {
  const {
    components: { ColumnTitle, ColumnResizeIcon },
  } = useTableProps();

  return (
    <th className={styles.root} {...props}>
      <div className={styles.wrapper}>
        {column?.headerName && <ColumnTitle text={column?.headerName} />}
        {children}
          <ColumnResizeIcon />
      </div>
    </th>
  );
};

export default Column;
