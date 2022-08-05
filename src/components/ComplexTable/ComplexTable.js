import React from "react";

import UseComplexTableContext, {useComplexTableContext} from "./useComplexTableContext";

const ComplexTable = ({ components, ...props }) => {
  const { Main, Table, RowsList, Header } = {
    ...useComplexTableContext().components,
    ...components,
  };

  return (
    <UseComplexTableContext components={components} {...props}>
      <Table>
        <Header/>
        <Main>
          <RowsList />
        </Main>
      </Table>
    </UseComplexTableContext>
  );
};

export default ComplexTable;
