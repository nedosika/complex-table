import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import PaginationProvider from "../ComplexTable/modules/Pagination/Pagination";
import SearchProvider from "../ComplexTable/modules/Search/Searching";
import SelectionProvider from "../ComplexTable/modules/Selection/Selection";
import SortingProvider from "../ComplexTable/modules/Sorting/Sorting";
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
