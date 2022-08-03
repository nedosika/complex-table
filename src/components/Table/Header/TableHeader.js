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
        <th colSpan={columns.length}>
          <Toolbar/>
        </th>
      </tr>
      <tr>
        {children}
        {columns.map((column) => (
          <Column
            column={column}
            key={column.field}
            style={{ width: column.width }}
          />
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
