import React, { createContext, useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Table from "./Table";
import RowsList from "./Main/RowsList";
import Toolbar from "./Header/Toolbar";
import Column from "./Main/Column";
import ColumnTitle from "./Main/Column/ColumnTitle";
import ColumnResizeIcon from "./Main/Column/ColumnResizeIcon";
import Row from "./Main/Row";
import Cell from "./Main/Cell";
import RowCounter from "./Footer/RowCounter";
import ColumnsList from "./Header/ColumnsList";

const TableContext = createContext({});

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({ children, value }) => {
  return (
    <TableContext.Provider
      value={{
        getRowId: (row) => row.id,
        getRowHeight: () => "auto",
        components: {
          Table,
          Header,
          Toolbar,
          ColumnsList,
          Main,
          RowsList,
          Footer,

          Row,
          Cell,
          Column,
          ColumnTitle,
          // ColumnMenu,
          // ColumnMenuIcon,
          ColumnResizeIcon,
          RowCounter,
        },
        ...value,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default TableProvider;
