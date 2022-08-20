import React, { createContext, useContext } from "react";

export const PAGINATION_CONFIG = {
  rowsPerPageOptions: "rowsPerPageOptions",
  page: "page",
  pageSize: "pageSize",
};

const PaginationContext = createContext({});

export const usePaginationContext = () => useContext(PaginationContext);

const PaginationProvider = ({ children, ...props }) => {
  return (
    <PaginationContext.Provider value={props}>
        {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
