import React, { createContext, useContext } from "react";
import useSelection from "./useSelection";
import ColumnsList from "./ColumnsList";
import CheckBox from "./CheckBox";
import RowsList from "./RowsList";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import TableProvider, { useTableContext } from "../../../Table/useTableContext";

const SelectionContext = createContext({});

export const useSelectionContext = () => useContext(SelectionContext);

const Selection = ({ children }) => {
  const {components, ...props} = useTableContext();
  const { rows, getRowId } = props;

  return (
    <SelectionContext.Provider value={useSelection({ rows, getRowId })}>
      <TableProvider
        {...props}
        components={{
          ...components,
          ColumnsList,
          CheckBox,
          RowsList,
          Footer,
          Toolbar,
        }}
      >
        {children}
      </TableProvider>
    </SelectionContext.Provider>
  );
};

export default Selection;
