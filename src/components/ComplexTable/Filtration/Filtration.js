import React, { createContext, useContext } from "react";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import useFilter from "./useFilter";
import ColumnsList from "./ColumnsList";
import Menu from "../../Menu/Menu";
import ColumnMenuItem from "./ColumnMenuItem";
import Divider from "../../Menu/Divider";
import Button from "../../Button";
import FiltrationMenu from "./FiltrationMenu";

const FiltrationContext = createContext({});

export const useFiltrationContext = () => useContext(FiltrationContext);

const FiltrationProvider = ({ children }) => {
  const { components, rows, columns } = useTableContext();
  const filtration = useFilter({ rows, columns });
  const {
    rows: filteredRows,
    isOpen,
    anchorEl,
    menuItems,
    filtrationActions: { toggleMenu, applyFilter, clearFilter, toggleFilter },
  } = filtration;

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
