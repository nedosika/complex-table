import React, { createContext, useContext } from "react";

const TableContext = createContext({});

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({ children, ...props }) => {

  return (
    <TableContext.Provider value={props}>{children}</TableContext.Provider>
  );
};

export default TableProvider;
