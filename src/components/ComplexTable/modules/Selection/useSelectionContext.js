import React, { createContext, useContext } from "react";
import useSelection from "./useSelection";
import { TABLE_CONFIG, useTableContext } from "../../../Table/useTableContext";

export const SELECTION_CONFIG = {
  checkboxSelection: "checkboxSelection",
};

const SelectionContext = createContext({});

export const useSelectionContext = () => useContext(SelectionContext);

const SelectionProvider = ({ children }) => {
  const { [TABLE_CONFIG.rows]: rows, [TABLE_CONFIG.getRowId]: getRowId } =
    useTableContext();
  return (
    <SelectionContext.Provider value={useSelection({ rows, getRowId })}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionProvider;
