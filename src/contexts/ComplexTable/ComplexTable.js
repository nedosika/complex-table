import React, { createContext, useContext, useState } from "react";

import Table from "../../components/Table/Table";
import Column from "../../components/Table/Main/Column";
import Toolbar from "../../components/Table/Toolbar/Toolbar";
import Header from "../../components/Table/Main/Header";
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

const composeProps = (props) =>
  compose(
    ColumnMenuBuilder,
    Sorting,
    CheckBoxSelection,
    PaginationBuilder
  )(props);

const TableContext = createContext({
  components: {
    Main,
    Header,
    Footer,
    Row,
    Cell,
    Column,
    ColumnTitle,
    ColumnMenu,
    ColumnMenuIcon,
    ColumnResizeIcon,
    RowCounter,
  }
});

export const useTableProps = () => useContext(TableContext);

const ComplexTable = (props) => {
  const { components } = useTableProps();
  const {columns, rows} = props;
  const [columnsToShow, setColumnsToShow] = useState(columns);
  const [rowsToShow, setRowsToShow] = useState(rows);

  const composedProps = composeProps({
    ...props,
    columnsToShow,
    setColumnsToShow,
    rowsToShow,
    setRowsToShow,
    getRowId: (row) => row.id,
    components: { ...components, ...props.components },
  });

  console.log(columnsToShow)

  return (
    <TableContext.Provider value={composedProps}>
      <Table />
    </TableContext.Provider>
  );
};

export default ComplexTable;
