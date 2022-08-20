import React from "react";
import { useTableContext } from "./useTableContext";

const DefaultTable = () => {
  const {
    components: { Table, Header, Main, RowsList, Footer, Toolbar, ColumnsList },
  } = useTableContext();

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
