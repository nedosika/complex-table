import React from "react";
import useTableSearch from "./useTableSearch";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import Toolbar from "./SearchToolbar";

const Searching = ({ children }) => {
  const { columns, rows, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...useTableSearch({ rows, columns }),
        components: {
          ...components,
          Toolbar,
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Searching;
