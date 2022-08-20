import React from "react";
import Selection from "../ComplexTable/modules/Selection/Selection";
import RootProvider from "../Table/useRootContext";
import Pagination from "../ComplexTable/modules/Pagination/Pagination";
import Searching from "../ComplexTable/modules/Search/Searching";
import Sorting from "../ComplexTable/modules/Sorting/Sorting";
import Filtration from "../ComplexTable/modules/Filtration/Filtration";

const AllProviders = ({ children, ...props }) => {
  return (
    <RootProvider {...props}>
      <Selection>
        <Searching>
          <Sorting>
            <Filtration>
              <Pagination>{children}</Pagination>
            </Filtration>
          </Sorting>
        </Searching>
      </Selection>
    </RootProvider>
  );
};

export default AllProviders;
