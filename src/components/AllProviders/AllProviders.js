import React from "react";
import Selection from "../ComplexTable/modules/Selection/Selection";
import RootProvider from "../Table/useRootContext";
import Pagination from "../ComplexTable/modules/Pagination/Pagination";
import Searching from "../ComplexTable/modules/Search/Searching";

const AllProviders = ({ children, ...props }) => {
  return (
    <RootProvider {...props}>
      <Selection>
        <Searching>
        <Pagination>
        {children}
        </Pagination>
        </Searching>
      </Selection>
    </RootProvider>
  );
};

export default AllProviders;
