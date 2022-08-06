import React, {createContext, useContext} from "react";
import usePagination from "./usePagination";
import {useSearchContext} from "../Search/useSearchContext";

const PaginationContext = createContext({});

export const usePaginationContext = () => useContext(PaginationContext);

const PaginationProvider = ({children}) => {
    const {rows} = useSearchContext();

    console.log(useSearchContext())

    return <PaginationContext.Provider value={usePagination(rows)}>
        {children}
    </PaginationContext.Provider>
}

export default PaginationProvider;