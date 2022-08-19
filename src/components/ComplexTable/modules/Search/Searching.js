import React, { createContext, useContext } from "react";
import useTableSearch from "./useTableSearch";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import Toolbar from "./SearchToolbar";

const SearchingContext = createContext({});

export const useSearchingContext = () => useContext(SearchingContext);

const Searching = ({ children }) => {
  const { columns, rows, components } = useTableContext();
  const { rows: searchedRows, ...searching } = useTableSearch({
    rows,
    columns,
  });

  return (
    <SearchingContext.Provider value={searching}>
      <TableProvider
        value={{
          ...useTableContext(),
          rows: searchedRows,
          components: {
            ...components,
            Toolbar,
          },
        }}
      >
        {children}
      </TableProvider>
    </SearchingContext.Provider>
  );
};

export default Searching;
