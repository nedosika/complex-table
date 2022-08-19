import React from "react";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import Footer from "./Footer";
import usePagination from "../../../Pagination/usePagination";
import PaginationProvider from "../../../Pagination/usePaginationContext";

const Pagination = ({ children }) => {
  const { rows, page, pageSize, rowsPerPageOptions, components } =
    useTableContext();
  const { rows: paginationRows, ...pagination } = usePagination({
    rows,
    page,
    pageSize,
  });

  return (
    <PaginationProvider value={{...pagination, rowsPerPageOptions}}>
      <TableProvider
        value={{
          ...useTableContext(),
          rows: paginationRows,
          components: {
            ...components,
            Footer,
          },
        }}
      >
        {children}
      </TableProvider>
    </PaginationProvider>
  );
};

export default Pagination;
