import React from "react";
import useSorting from "./useSorting";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import Header from "./Header";

const Sorting = ({ children }) => {
  const { rows, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...useSorting(rows),
        components: {
          ...components,
          Header,
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Sorting;
