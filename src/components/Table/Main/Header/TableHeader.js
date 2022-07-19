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
      {columnsToShow.map(({headerName, field, width}) => (
        <Column headerName={headerName} key={field} sx={{width}}/>
      ))}
    </tr>
  );
};

export default TableHeader;
