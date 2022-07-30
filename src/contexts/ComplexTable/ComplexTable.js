import React, { createContext, useContext, useState } from "react";

import Table from "../../components/Table/Table";
import Column from "../../components/Table/Main/Column";
import Toolbar from "../../components/Toolbar/Toolbar";
import Header from "../../components/Table/Header";
import Footer from "../../components/Table/Footer";
import Row from "../../components/Table/Main/Row";
import Main from "../../components/Table/Main";
import Cell from "../../components/Table/Main/Cell";
import ColumnTitle from "../../components/Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../components/Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../../components/Table/Footer/RowCounter";
import ColumnMenuIcon from "../../modules/ColumnMenuBuilder/ColumnMenuIcon";

import { compose } from "../../helpers";
import Sorting from "../../modules/Sorting/Sorting";
import CheckBoxSelection from "../../modules/CheckBoxSelection/CheckBoxSelection";
import Filtration from "../../modules/Filtration";
import ColumnMenuBuilder from "../../modules/ColumnMenuBuilder";
import ColumnMenu from "../../modules/ColumnMenuBuilder/ColumnMenu";
import PaginationBuilder from "../../modules/PaginationBuilder/PaginationBuilder";
import ToolbarBuilder from "../../modules/ToolbarBuilder";

const composeProps = (props) =>
  compose(
    //   CheckBoxSelection,
    // ColumnMenuBuilder,
    // Sorting,
    // ToolbarBuilder,
    // PaginationBuilder
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

  const composedProps = composeProps({
    getRowId: (row) => row.id,
    getRowHeight: () => "auto",
    ...props,
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
