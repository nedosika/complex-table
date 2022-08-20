import React from "react";
//import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
import Selection from "../ComplexTable/modules/Selection/Selection";
import RootProvider from "../Table/useRootContext";
import DefaultProvider from "../ComplexTable/useDefaultContext";
// import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
// import PaginationProvider from "../ComplexTable/modules/Pagination/Pagination";
// import SearchProvider from "../ComplexTable/modules/Search/Searching";
// import SelectionProvider from "../ComplexTable/modules/Selection/Selection";
// import SortingProvider from "../ComplexTable/modules/Sorting/Sorting";

const AllProviders = ({ children, ...props }) => {
  return (
    <RootProvider {...props}>
        <Selection>
        {/*  <ComplexTableProvider>*/}
        {/*<Selection>*/}
        {/*  <SelectionProvider>*/}
        {/*    <SearchProvider>*/}
        {/*      <PaginationProvider>*/}
        <DefaultProvider>
            {children}
        </DefaultProvider>
        {/*      </PaginationProvider>*/}
        {/*    </SearchProvider>*/}
        {/*  </SelectionProvider>*/}
        {/*</Selection>*/}
        {/*</ComplexTableProvider>*/}
        </Selection>
    </RootProvider>
  );
};

export default AllProviders;
