import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import Toolbar from "./SearchToolbar/SearchToolbar";
import { useRootContext } from "../../../Table/useRootContext";
import useTableSearch from "./useTableSearch";
import SearchingProvider from "./useSearchingContext";

const Searching = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();

  const { rows: searchedRows, ...searching } = useTableSearch();

  return (
    <SearchingProvider {...searching}>
      <TableProvider
        {...props}
        {...rootProps}
        rows={searchedRows}
        components={{ ...components, Toolbar, ...rootComponents }}
      >
        {children}
      </TableProvider>
    </SearchingProvider>
  );
};

export default Searching;
