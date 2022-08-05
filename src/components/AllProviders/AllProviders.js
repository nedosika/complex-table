import React from "react";
import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import PaginationProvider from "../ComplexTable/Pagination/usePaginationProvider";
import SearchProvider from "../ComplexTable/Search/useSearchContext";

const AllProviders = ({ children, ...props }) => {
  return (
    <ComplexTableProvider {...props}>
      <SearchProvider>
        <PaginationProvider>{children}</PaginationProvider>
      </SearchProvider>
    </ComplexTableProvider>
  );
};

export default AllProviders;
