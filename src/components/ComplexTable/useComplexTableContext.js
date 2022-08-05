import React, { createContext, useContext, useState } from "react";

import Toolbar from "./Search/SearchToolbar";
import Row from "../Table/Main/Row/TableRow";
import Cell from "../Table/Main/Cell/TableCell";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnMenu from "../../modules/ColumnMenuBuilder/ColumnMenu";
import ColumnMenuIcon from "../../modules/ColumnMenuBuilder/ColumnMenuIcon";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../Table/Footer/RowCounter";
import Footer from "../Table/Footer";
import Table from "../Table/Table";
import Main from "../Table/Main";
import Header from "../Table/Header";

const TableContext = createContext({
  components: { Header, Main, Footer, Table, Row },
});

export const useComplexTableContext = () => useContext(TableContext);

const UseComplexTableContext = ({ children, components, ...props }) => {
  const [tableRows, setTableRows] = useState(props.rows);

  return (
    <TableContext.Provider
      value={{
        getRowId: (row) => row.id,
        getRowHeight: () => "auto",
        tableRows,
        setTableRows,
        components: {
          Table,
          Main,
          Header,
          Footer,
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

export default UseComplexTableContext;
