import React, { createContext, useContext } from "react";

const FiltrationContext = createContext({});

export const useFiltrationContext = () => useContext(FiltrationContext);

const FiltrationProvider = ({ children, ...props}) => {
  return (
    <FiltrationContext.Provider value={props}>
        {children}
    </FiltrationContext.Provider>
  );
};

export default FiltrationProvider;
