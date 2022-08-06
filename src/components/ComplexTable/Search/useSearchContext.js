import React, {createContext, useContext} from "react";
import useTableSearch from "./useTableSearch";
import {useSortingContext} from "../Sorting/useSortingContext";
import {useTableContext} from "../../Table/useTableContext";

const SearchContext = createContext({});

export const useSearchContext = () => useContext(SearchContext);

const SearchProvider = ({children}) => {
    const {columns} = useTableContext();
    const {rows} = useSortingContext();

    console.log(useSortingContext())

    return (
        <SearchContext.Provider value={useTableSearch({rows, columns})}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;