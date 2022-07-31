import React from "react";

import { useTableProps } from "../../ComplexTable/ComplexTable";

const TableHeader = ({ children }) => {
  const {
    columns,
    components: { Column, Toolbar },
  } = useTableProps();

  return (
    <thead>
      <tr>
        <th colSpan={2}>
          <Toolbar/>
        </th>
      </tr>
      <tr>
        {children}
        {columns.map((column) => (
          <Column
            column={column}
            key={column.field}
            sx={{ width: column.width }}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
