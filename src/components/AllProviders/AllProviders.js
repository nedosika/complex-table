import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import Selection from "../ComplexTable/modules/Selection/Selection";
import TableProvider from "../ComplexTable/useTableContext";
// import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
// import PaginationProvider from "../ComplexTable/modules/Pagination/Pagination";
// import SearchProvider from "../ComplexTable/modules/Search/Searching";
// import SelectionProvider from "../ComplexTable/modules/Selection/Selection";
// import SortingProvider from "../ComplexTable/modules/Sorting/Sorting";

const AllProviders = ({ children, ...props }) => {
  return (
    <TableProvider {...props}>
      {/*<Selection>*/}
      {/*  <ComplexTableProvider>*/}
      {/*<Selection>*/}
      {/*  <SelectionProvider>*/}
      {/*    <SearchProvider>*/}
      {/*      <PaginationProvider>*/}
      {children}

      {/*      </PaginationProvider>*/}
      {/*    </SearchProvider>*/}
      {/*  </SelectionProvider>*/}
      {/*</Selection>*/}
      {/*</ComplexTableProvider>*/}
      {/*</Selection>*/}
    </TableProvider>
  );
};

export default AllProviders;
