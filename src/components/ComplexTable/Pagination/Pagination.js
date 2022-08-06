import React from "react";
import usePagination from "./usePagination";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import Footer from "./Footer";

const Pagination = ({ children }) => {
  const { rows, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...usePagination(rows),
        components: {
          ...components,
          Footer,
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Pagination;
