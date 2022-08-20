import React, { createContext, useContext } from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import { useRootContext } from "../../../Table/useRootContext";
import usePagination from "../../../Pagination/usePagination";
import Footer from "./Footer";

export const PAGINATION_CONFIG = {
  rowsPerPageOptions: "rowsPerPageOptions",
  page: "page",
  pageSize: "pageSize",
};

const PaginationContext = createContext({});

export const usePaginationContext = () => useContext(PaginationContext);

const PaginationProvider = ({ children }) => {
  const { components: rootComponents } = useRootContext();
  const props = useTableContext();
  const {
    [TABLE_CONFIG.rows]: rows,
    [TABLE_CONFIG.components]: components,
    [PAGINATION_CONFIG.page]: page,
    [PAGINATION_CONFIG.pageSize]: pageSize,
  } = props;
  const { rows: paginationRows, ...pagination } = usePagination({
    rows,
    page,
    pageSize,
  });
  return (
    <PaginationContext.Provider value={pagination}>
      <TableProvider
        {...props}
        rows={paginationRows}
        components={{
          ...components,
          Footer,
          ...rootComponents,
        }}
      >
        {children}
      </TableProvider>
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
