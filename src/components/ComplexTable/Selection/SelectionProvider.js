import React, { createContext, useContext, useState } from "react";
import {useTableProps} from "../useComplexTableContext";

const SelectionContext = createContext({});

export const useSelection = () => useContext(SelectionContext);

const SelectionProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);
  const {getRowId, showedRows: rows} = useTableProps();

  const toggleSelected = (row) =>
    setSelected((prevState) =>
      prevState.includes(getRowId(row))
        ? prevState.filter((checkedId) => checkedId !== getRowId(row))
        : [...prevState, getRowId(row)]
    );

  const getIsSelected = (row) => {
      return selected.includes(getRowId(row));
  }

  const toggleSelectedAll = () =>
    selected.length ? setSelected([]) : setSelected(rows.map(getRowId));

  const selectOne = (row) => {
    setSelected([getRowId(row)]);
  };

  return (
    <SelectionContext.Provider
      value={{
        selected,
        toggleSelected,
        getIsSelected,
        toggleSelectedAll,
        selectOne,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionProvider;
