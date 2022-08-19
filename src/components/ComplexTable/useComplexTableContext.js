import React, { createContext, useContext } from "react";

export const COMPLEX_TABLE_CONFIG = {
  rows: 'rows',
  columns: 'columns',
  getRowId: 'getRowId',
  getRowHeight: 'getRowHeight',
}

const ComplexTableContext = createContext({
});

export const useComplexTableContext = () => useContext(ComplexTableContext);

const ComplexTableProvider = ({ children, ...props}) => {

  return (
    <ComplexTableContext.Provider value={{
      [COMPLEX_TABLE_CONFIG.getRowHeight]: () => "auto",
      [COMPLEX_TABLE_CONFIG.getRowId]: (row) => row.id,
      ...props
    }}>
      {children}
    </ComplexTableContext.Provider>
  );
};

export default ComplexTableProvider;
