import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import PaginationProvider from "../ComplexTable/Pagination/usePaginationProvider";
import SearchProvider from "../ComplexTable/Search/useSearchContext";
import SelectionProvider from "../ComplexTable/Selection/useSelectionContext";

const AllProviders = ({ children, ...props }) => {
  return (
    <ComplexTableProvider {...props}>
      <SelectionProvider>
        <SearchProvider>
          <PaginationProvider>{children}</PaginationProvider>
        </SearchProvider>
      </SelectionProvider>
    </ComplexTableProvider>
  );
};

export default AllProviders;
