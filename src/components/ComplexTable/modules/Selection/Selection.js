import React, { createContext, useContext } from "react";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";
import useSelection from "./useSelection";
import ColumnsList from "./ColumnsList";
import CheckBox from "./CheckBox";
import RowsList from "./RowsList";
import Footer from "./Footer";
import Toolbar from "./Toolbar";

const SelectionContext = createContext({});

export const useSelectionContext = () => useContext(SelectionContext);

const Selection = ({ children }) => {
  const { rows, getRowId, components } = useTableContext();

  return (
    <SelectionContext.Provider value={useSelection({ rows, getRowId })}>
      <TableProvider
        value={{
          ...useTableContext(),
          components: {
            ...components,
            ColumnsList,
            CheckBox,
            RowsList,
            Footer,
            Toolbar,
          },
        }}
      >
        {children}
      </TableProvider>
    </SelectionContext.Provider>
  );
};

export default Selection;
