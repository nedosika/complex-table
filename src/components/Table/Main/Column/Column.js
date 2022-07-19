import React from "react";

import styles from "./Column.module.scss";
import { useTableProps } from "../../../../contexts/ComplexTable/ComplexTable";

const Column = ({ children, column, sx, ...props }) => {
  const {
    components: { ColumnTitle, ColumnResizeIcon },
  } = useTableProps();

  return (
    <th className={styles.root} style={sx} {...props}>
        <div className={styles.wrapper}>
            <ColumnTitle text={column?.headerName} />
            {children}
            <ColumnResizeIcon />
        </div>
    </th>
  );

  // return (
  //     <div
  //         {...props}
  //         className={styles.root}
  //         style={{
  //             minWidth: width,
  //             maxWidth: width
  //         }}
  //     >
  //         <ColumnTitle text={headerName}/>
  //         {children}
  //         <ColumnResizeIcon/>
  //     </div>
  // );
};

export default Column;
