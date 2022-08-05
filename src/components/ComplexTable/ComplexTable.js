import React from "react";

import AllProviders from "../AllProviders/AllProviders";
import Table from "../Table";
import Header from "../ComplexTable/Sorting/Header";
import Main from "../Table/Main";
import RowsList from "../ComplexTable/Selection/RowsList";
import Footer from "../ComplexTable/Pagination/Footer";

const ComplexTable = ({ components, ...props }) => {
  // const { components: defaultComponents } = useComplexTableContext();
  // const {
  //   components: { Table, Header, Main, Footer, RowsList },
  // } = { components: { ...defaultComponents, ...components } };

  return (
    <AllProviders {...props}>
      <Table>
        <Header />
        <Main>
          <RowsList />
        </Main>
        <Footer />
      </Table>
    </AllProviders>
  );
};

export default ComplexTable;
