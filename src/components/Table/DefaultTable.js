import React from "react";
import { TABLE_CONFIG, useTableContext } from "./useTableContext";
import { useRootContext } from "./useRootContext";

const DefaultTable = () => {
  const { [TABLE_CONFIG.components]: rootComponents } = useRootContext();
  const { components } = useTableContext();

  const { Table, Header, Main, RowsList, Footer, Toolbar, ColumnsList } =
    Object.assign(components, rootComponents);

  return (
    <Table>
      <Header>
        <Toolbar />
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
