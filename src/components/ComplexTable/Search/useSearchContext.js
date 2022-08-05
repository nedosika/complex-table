import React, {createContext, useContext, useState} from "react";
import {useComplexTableContext} from "../useComplexTableContext";
import useTableSearch from "./useTableSearch";

const SearchContext = createContext({});

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({children}) => {
    const {rows,columns} = useComplexTableContext();
    return (
        <SearchContext.Provider value={useTableSearch({rows, columns})}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;