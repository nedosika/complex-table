import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import PaginationProvider from "../ComplexTable/Pagination/Pagination";
import SearchProvider from "../ComplexTable/Search/Searching";
import SelectionProvider from "../ComplexTable/Selection/Selection";
import SortingProvider from "../ComplexTable/Sorting/Sorting";
import TableProvider from "../Table/useTableContext";

const AllProviders = ({ children, ...props }) => {
  return (
    <TableProvider {...props}>
      {/*<SortingProvider>*/}
      {/*  <SelectionProvider>*/}
      {/*    <SearchProvider>*/}
      {/*      <PaginationProvider>*/}

      {children}

      {/*      </PaginationProvider>*/}
      {/*    </SearchProvider>*/}
      {/*  </SelectionProvider>*/}
      {/*</SortingProvider>*/}
    </TableProvider>
  );
};

export default AllProviders;
