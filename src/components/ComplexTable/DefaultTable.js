import React from "react";

import { useTableContext } from "./useTableContext";
import Table from "../Table/Table";
import Header from "../Table/Header";
import Toolbar from "../Table/Header/Toolbar";
import Main from "../Table/Main";
import Footer from "../Table/Footer";
import ColumnsList from "./ColumnsList";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import RowsList from "./RowsList";
import Row from "../Table/Main/Row";
import Cell from "../Table/Main/Cell";
import { COMPLEX_TABLE_CONFIG } from "./useComplexTableContext";

const defaultComponents = {
  Table,
  Header,
  Main,
  Column,
  ColumnTitle,
  ColumnResizeIcon,
  RowsList,
  Footer,
  Toolbar,
  ColumnsList,
  Row,
  Cell,
};

const defaultProps = {
  [COMPLEX_TABLE_CONFIG.getRowHeight]: () => "auto",
  [COMPLEX_TABLE_CONFIG.getRowId]: (row) => row.id,
};

const DefaultTable = () => {
  const { components, ...props } = useTableContext();
  const { getRowId, rows, columns } = Object.assign(defaultProps, props);

  const {
    Table,
    Header,
    Main,
    RowsList,
    Footer,
    Toolbar,
    ColumnsList,
  } = Object.assign(defaultComponents, components);

  return (
    <Table>
      <Header>
        <Toolbar />
        <ColumnsList columns={columns}/>
      </Header>
      <Main>
        <RowsList getRowId={getRowId}/>
      </Main>
      <Footer />
    </Table>
  );
};

export default DefaultTable;
