import React, { createContext, useContext } from "react";
import useSorting from "./useSorting";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";

const SortingContext = createContext({});

export const useSortingContext = () => useContext(SortingContext);

const Sorting = ({ children }) => {
  const { rows, components } = useTableContext();
  const { rows: sortedRows, ...sorting } = useSorting(rows);;

  return (
    <SortingContext.Provider value={sorting}>
      <TableProvider
        value={{
          ...useTableContext(),
          rows: sortedRows,
          components: {
            ...components,
            ColumnsList,
          },
        }}
      >
        {children}
      </TableProvider>
    </SortingContext.Provider>
  );
};

export default Sorting;
