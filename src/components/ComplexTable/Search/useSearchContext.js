import React, {createContext, useContext, useState} from "react";
import {useComplexTableContext} from "../useComplexTableContext";
import useTableSearch from "./useTableSearch";
import {useSortingContext} from "../Sorting/useSortingContext";

const SearchContext = createContext({});

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({children}) => {
    const {columns} = useComplexTableContext();
    const {rows} = useSortingContext();

    return (
        <SearchContext.Provider value={useTableSearch({rows, columns})}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;