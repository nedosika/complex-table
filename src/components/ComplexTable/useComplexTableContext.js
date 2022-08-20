import React, { createContext, useContext } from "react";
import Table from "../Table/Table";
import Header from "../Table/Header";
import Toolbar from "../Table/Header/Toolbar";
import ColumnsList from "./ColumnsList";
import Main from "../Table/Main";
import RowsList from "./RowsList";
import Footer from "../Table/Footer";
import Row from "../Table/Main/Row";
import Cell from "../Table/Main/Cell";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import TableProvider, { useTableContext } from "./useTableContext";
// import RowCounter from "../Table/Footer/RowCounter";

export const COMPLEX_TABLE_CONFIG = {
  rows: "rows",
  columns: "columns",
  getRowId: "getRowId",
  getRowHeight: "getRowHeight",
};

const ComplexTableContext = createContext({});

export const useComplexTableContext = () => useContext(ComplexTableContext);

const ComplexTableProvider = ({ children }) => {
  const { components, ...props } = useTableContext();

  return (
    <ComplexTableContext.Provider
      value={{
        [COMPLEX_TABLE_CONFIG.getRowHeight]: () => "auto",
        [COMPLEX_TABLE_CONFIG.getRowId]: (row) => row.id,
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
          // // ColumnMenu,
          // // MenuIcon,
          ColumnResizeIcon,
          // RowCounter,
          ...components,
        },
        ...props,
      }}
    >
      {children}
    </ComplexTableContext.Provider>
  );
};

export default ComplexTableProvider;
