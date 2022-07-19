import React from "react";

import { useTableProps } from "../../../../contexts/ComplexTable/ComplexTable";

const TableHeader = ({ children }) => {
  const {
    columnsToShow,
    components: { Column },
  } = useTableProps();

  return (
    <tr>
      {children}
      {columnsToShow.map((column) => (
        <Column
          column={column}
          key={column.field}
          sx={{ width: column.width }}
        />
      ))}
    </tr>
  );
};

export default TableHeader;
