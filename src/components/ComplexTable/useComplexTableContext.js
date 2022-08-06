import React, { createContext, useContext } from "react";

const ComplexTableContext = createContext({
});

export const useComplexTableContext = () => useContext(ComplexTableContext);

const ComplexTableProvider = ({ children, ...props}) => {

  return (
    <ComplexTableContext.Provider value={props}>
      {children}
    </ComplexTableContext.Provider>
  );
};

export default ComplexTableProvider;
