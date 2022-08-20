import React, { createContext, useContext } from "react";

export const TABLE_CONFIG = {
  rows: "rows",
  columns: "columns",
  getRowId: "getRowId",
  getRowHeight: "getRowHeight",
};

const TableContext = createContext({});

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({ children, ...props }) => {
  //const newProps = Object.assign(defaultProps, props);
  return (
    <TableContext.Provider value={props}>{children}</TableContext.Provider>
  );
};

export default TableProvider;
