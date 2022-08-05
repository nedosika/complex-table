import React from "react";
import UseComplexTableContext from "../ComplexTable/useComplexTableContext";
import SelectionProvider from "../ComplexTable/Selection/SelectionProvider";
import SearchProvider from "../ComplexTable/Search/SearchProvider";

const AllProviders = ({ children, ...props }) => {
  return (
    <UseComplexTableContext {...props}>
      <SelectionProvider>
        <SearchProvider>{children}</SearchProvider>
      </SelectionProvider>
    </UseComplexTableContext>
  );
};

export default AllProviders;
