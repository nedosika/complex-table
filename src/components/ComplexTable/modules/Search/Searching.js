import React, { createContext, useContext } from "react";
import useTableSearch from "./useTableSearch";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import Toolbar from "./SearchToolbar";
import { useRootContext } from "../../../Table/useRootContext";

const SearchingContext = createContext({});

export const useSearchingContext = () => useContext(SearchingContext);

const Searching = ({ children }) => {
  const { components: rootComponents } = useRootContext();
  const { components, ...props } = useTableContext();
  const { rows, columns } = props;
  const { rows: searchedRows, ...searching } = useTableSearch({
    rows,
    columns,
  });

  return (
    <SearchingContext.Provider value={searching}>
      <TableProvider
        {...props}
        rows={searchedRows}
        components={{ ...components, Toolbar, ...rootComponents }}
      >
        {children}
      </TableProvider>
    </SearchingContext.Provider>
  );
};

export default Searching;
