import React from "react";
import useSorting from "./useSorting";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import ColumnsList from "./ColumnsList";

const Sorting = ({ children }) => {
  const { rows, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...useSorting(rows),
        components: {
          ...components,
          ColumnsList,
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Sorting;
