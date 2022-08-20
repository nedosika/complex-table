import React, { createContext, useContext } from "react";
import TableProvider from "./useTableContext";

const RootContext = createContext({});

export const useRootContext = () => useContext(RootContext);

const RootProvider = ({ children, ...props }) => {
  return (
    <RootContext.Provider value={props}>
      <TableProvider {...props}>{children}</TableProvider>
    </RootContext.Provider>
  );
};

export default RootProvider;
