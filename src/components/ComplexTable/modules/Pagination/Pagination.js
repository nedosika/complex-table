import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import Footer from "./Footer";
import { useRootContext } from "../../../Table/useRootContext";
import usePagination from "../../../Pagination/usePagination";
import PaginationProvider, { PAGINATION_CONFIG } from "./usePaginationContext";

const Pagination = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();
  const { rows: paginationRows, ...pagination } = usePagination();

  return (
    <PaginationProvider {...pagination}>
      <TableProvider
        {...props}
        {...rootProps}
        rows={paginationRows}
        components={{
          ...components,
          Footer,
          ...rootComponents,
        }}
      >
        {children}
      </TableProvider>
    </PaginationProvider>
  );
};

export default Pagination;
