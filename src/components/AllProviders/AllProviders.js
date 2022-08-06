import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import PaginationProvider from "../ComplexTable/Pagination/usePaginationProvider";
import SearchProvider from "../ComplexTable/Search/useSearchContext";
import SelectionProvider from "../ComplexTable/Selection/useSelectionContext";
import SortingProvider from "../ComplexTable/Sorting/useSortingContext";
import TableProvider from "../Table/useTableContext";

const AllProviders = ({ children, ...props }) => {
  return (
    <ComplexTableProvider {...props}>
      {/*<SortingProvider>*/}
      {/*  <SelectionProvider>*/}
      {/*    <SearchProvider>*/}
      {/*      <PaginationProvider>*/}
              <TableProvider>
                {children}
              </TableProvider>
      {/*      </PaginationProvider>*/}
      {/*    </SearchProvider>*/}
      {/*  </SelectionProvider>*/}
      {/*</SortingProvider>*/}
    </ComplexTableProvider>
  );
};

export default AllProviders;
