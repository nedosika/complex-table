import React, { createContext, useContext } from "react";
import Table from "../Table/Table";
import Header from "../Table/Header";
import Toolbar from "../Table/Header/Toolbar";
import ColumnsList from "../Table/ColumnsList";
import Main from "../Table/Main";
import RowsList from "../Table/RowsList";
import Footer from "../Table/Footer";
import Row from "../Table/Main/Row";
import Cell from "../Table/Main/Cell";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import TableProvider, { useTableContext } from "../Table/useTableContext";
// import RowCounter from "../Table/Footer/RowCounter";

export const COMPLEX_TABLE_CONFIG = {
  rows: "rows",
  columns: "columns",
  components: "components",
  getRowId: "getRowId",
  getRowHeight: "getRowHeight",
  onRowsScrollEnd: "onRowsScrollEnd",
  pagination: 'pagination',
  checkboxSelection: 'checkboxSelection'
};

export const COLUMN_TYPES = {
  actions: "actions",
  number: "number",
  date: "date",
  string: "string",
  selection: "selection",
};

export const COLUMN_FIELDS = {
  field: "field",
  type: "type",
  headerName: "headerName",
  width: "width",
  description: "description",
  sortable: "sortable",
  searchable: "searchable",
  getActions: "getActions",
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
        [COMPLEX_TABLE_CONFIG.components]: {
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
          ColumnResizeIcon,
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
