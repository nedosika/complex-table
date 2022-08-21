import React, { createContext, useContext } from "react";

const SortingContext = createContext({});

export const useSortingContext = () => useContext(SortingContext);

const SortingProvider = ({ children, ...props }) => {
  return (
    <SortingContext.Provider value={props}>
        {children}
    </SortingContext.Provider>
  );
};

export default SortingProvider;
