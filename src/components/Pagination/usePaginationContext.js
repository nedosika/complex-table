import React, {createContext, useContext} from "react";

const PaginationContext = createContext({});

export const usePaginationContext = () => useContext(PaginationContext);

const PaginationProvider = ({children, value}) => {
    return <PaginationContext.Provider value={value}>
        {children}
    </PaginationContext.Provider>
}

export default PaginationProvider;