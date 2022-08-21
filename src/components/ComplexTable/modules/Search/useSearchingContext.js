import React, { createContext, useContext } from "react";
const SearchingContext = createContext({});

export const useSearchingContext = () => useContext(SearchingContext);

const SearchingProvider = ({ children, ...props }) => {
  return (
    <SearchingContext.Provider value={props}>
        {children}
    </SearchingContext.Provider>
  );
};

export default SearchingProvider
