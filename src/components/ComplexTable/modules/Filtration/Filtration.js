import React, { createContext, useContext } from "react";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import useFilter from "./useFilter";
import ColumnsList from "./ColumnsList";
import FiltrationMenu from "./FiltrationMenu/FiltrationMenu";

const FiltrationContext = createContext({});

export const useFiltrationContext = () => useContext(FiltrationContext);

const FiltrationProvider = ({ children }) => {
  const { components, rows, columns } = useTableContext();
  const {
    rows: filteredRows,
    ...filtration
  } = useFilter({ rows, columns });

  return (
    <FiltrationContext.Provider value={filtration}>
      <TableProvider
        value={{
          ...useTableContext(),
          rows: filteredRows,
          components: {
            ...components,
            ColumnsList,
          },
        }}
      >
        {children}
        <FiltrationMenu/>
      </TableProvider>
    </FiltrationContext.Provider>
  );
};

export default FiltrationProvider;
