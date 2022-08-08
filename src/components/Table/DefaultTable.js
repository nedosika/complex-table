import React from "react";
import { useTableContext } from "./useTableContext";
import ColumnsList from "./Header/ColumnsList";

const DefaultTable = (props) => {
  const { components, columns } = useTableContext();

  const { Table, Header, Main, RowsList, Footer, Toolbar, ColumnsList } =
    Object.assign(components, props.components);

  return (
      <Table>
        <Header>
          <Toolbar colSpan={columns.length} />
          <ColumnsList />
        </Header>
        <Main>
          <RowsList />
        </Main>
        <Footer />
      </Table>
  );
};

export default DefaultTable;
