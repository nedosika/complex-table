import React, {createContext, useContext, useState} from "react";
import {useTableProps} from "../useComplexTableContext";

const SearchContext = createContext({});

export const useSearch = () => useContext(SearchContext);

const SearchProvider = ({children}) => {
    const {rows} = useTableProps();
    const [searchedRows, setSearchedRows] = useState(rows);

    return (
        <SearchContext.Provider value={{
            searchedRows, setSearchedRows
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider;