import React from "react";
import Selection from "../ComplexTable/modules/Selection/Selection";
import RootProvider from "../Table/useRootContext";
// // import ComplexTableProvider from "../ComplexTable/useComplexTableContext";
// import Pagination from "../ComplexTable/modules/Pagination/usePaginationContext";
import Searching from "../ComplexTable/modules/Search/Searching";
// import SelectionProvider from "../ComplexTable/modules/UseSelectionContext/UseSelectionContext";
// import SortingProvider from "../ComplexTable/modules/Sorting/Sorting";

const AllProviders = ({ children, ...props }) => {
  return (
    <RootProvider {...props}>
      <Selection>
        <Searching>
        {/*<Pagination>*/}
        {children}
        {/*</Pagination>*/}
        </Searching>
      </Selection>
    </RootProvider>
  );
};

export default AllProviders;
