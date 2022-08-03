import React, { createContext, useContext, useState } from "react";

import Table from "../Table/Table";
import Column from "../Table/Main/Column";
import Toolbar from "../Table/Toolbar/Toolbar";
import Header from "../Table/Header";
import Footer from "../Table/Footer";
import Row from "../Table/Main/Row";
import Main from "../Table/Main";
import Cell from "../Table/Main/Cell";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../Table/Footer/RowCounter";
import ColumnMenuIcon from "../../modules/ColumnMenuBuilder/ColumnMenuIcon";

import { compose } from "../../helpers";
import Sorting from "../../modules/Sorting/Sorting";
import CheckBoxSelection from "../../modules/CheckBoxSelection/CheckBoxSelection";
import ColumnMenuBuilder from "../../modules/ColumnMenuBuilder";
import ColumnMenu from "../../modules/ColumnMenuBuilder/ColumnMenu";
import PaginationBuilder from "../../modules/PaginationBuilder/PaginationBuilder";

const composeProps = (props) =>
  compose(
    CheckBoxSelection,
    // ColumnMenuBuilder,
    //Sorting,
    //PaginationBuilder
  )(props);

const TableContext = createContext({
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
  },
});

export const useTableProps = () => useContext(TableContext);

const ComplexTable = (props) => {
  const { components } = useTableProps();
  const [showedRows, setRows] = useState(props.rows)

  const composedProps = composeProps({
    getRowId: (row) => row.id,
    getRowHeight: () => "auto",
    ...props,
    showedRows,
    setRows,
    components: { ...components, ...props.components },
  });

  const {
    components: { Table, Main, Footer, Header },
  } = composedProps;

  return (
    <TableContext.Provider value={composedProps}>
      <Table>
        <Header />
        <Main />
        <Footer/>
      </Table>
    </TableContext.Provider>
  );
};

export default ComplexTable;
