import React from "react";
import { useTableContext } from "./useTableContext";

const DefaultTable = (props) => {
  const { components } = useTableContext();

  const { Table, Header, Main, RowsList, Footer } = Object.assign(
    components,
    props.components
  );

  return (
    <Table>
      <Header />
      <Main>
        <RowsList />
      </Main>
      <Footer />
    </Table>
  );
};

export default DefaultTable;
