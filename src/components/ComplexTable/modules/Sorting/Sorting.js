import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import useSorting from "./useSorting";
import { useRootContext } from "../../../Table/useRootContext";
import SortingProvider from "./useSortingContext";

const Sorting = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const { [TABLE_CONFIG.components]: components, [TABLE_CONFIG.rows]: rows, ...props } = useTableContext();
  const { rows: sortedRows, ...sorting } = useSorting({rows});

  return (
    <SortingProvider {...sorting}>
      <TableProvider
        {...props}
        {...rootProps}
        rows={sortedRows}
        components={{
          ...components,
          ColumnsList,
          rootComponents,
        }}
      >
        {children}
      </TableProvider>
    </SortingProvider>
  );
};

export default Sorting;
