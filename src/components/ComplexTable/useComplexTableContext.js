import React, { createContext, useContext } from "react";

import Row from "../Table/Main/Row/TableRow";
import Cell from "../Table/Main/Cell/TableCell";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnMenu from "../../modules/ColumnMenuBuilder/ColumnMenu";
import ColumnMenuIcon from "../../modules/ColumnMenuBuilder/ColumnMenuIcon";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../Table/Footer/RowCounter";
import Footer from "../../components/ComplexTable/Pagination/Footer";
import Table from "../Table";
import Main from "../Table/Main";
import Header from "../Table/Header";
import RowsList from "../Table/Main/RowsList";
import Toolbar from "../ComplexTable/Search/SearchToolbar";
import useTableSearch from "./Search/useTableSearch";

const TableContext = createContext({
  components: { Header, Main, Footer, Table, Row, RowsList, Toolbar, Column },
});

export const useComplexTableContext = () => useContext(TableContext);

const ComplexTableProvider = ({ children, components, ...props }) => {
  return (
    <TableContext.Provider
      value={{
        getRowId: (row) => row.id,
        getRowHeight: () => "auto",
        components: {
          Header,
          Main,
          Footer,
          Table,
          RowsList,
          Toolbar,
          Row,
          Cell,
          Column,
          ColumnTitle,
          ColumnMenu,
          ColumnMenuIcon,
          ColumnResizeIcon,
          RowCounter,
          ...components,
        },
        ...props,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export default ComplexTableProvider;
