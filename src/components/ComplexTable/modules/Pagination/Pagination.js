import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import Footer from "./Footer";
import { useRootContext } from "../../../Table/useRootContext";
import usePagination from "../../../Pagination/usePagination";
import PaginationProvider from "./usePaginationContext";

const Pagination = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const {
    [TABLE_CONFIG.components]: components,
    rows,
    ...props
  } = useTableContext();
  const { rows: paginationRows, ...paginationProps } = usePagination();

  return (
    <PaginationProvider {...paginationProps}>
      <TableProvider
        {...props}
        {...rootProps}
        rows={rootProps[TABLE_CONFIG.pagination] ? paginationRows : rows}
        components={{
          ...components,
          Footer: rootProps[TABLE_CONFIG.pagination]
            ? Footer
            : components.Footer,
          ...rootComponents,
        }}
      >
        {children}
      </TableProvider>
    </PaginationProvider>
  );
};

export default Pagination;
