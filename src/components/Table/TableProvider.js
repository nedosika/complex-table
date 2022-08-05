import React, { createContext, useContext } from "react";
import Main from "./Main";
import Table from "./Table";
import RowsList from "./Main/RowsList";
import Row from "./Main/Row/TableRow";
import Cell from "./Main/Cell/TableCell";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Column from "./Main/Column";

const TableContext = createContext({
  getRowId: (row) => row.id,
  components: { Main, Table, RowsList, Row, Cell, Header, Toolbar, Column },
});

export const useTableProps = () => useContext(TableContext);

export const TableProvider = ({ children, components, ...props }) => {
  const value = {
    ...useTableProps(),
    components: { ...useTableProps().components, ...components },
    ...props,
  };

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
};
