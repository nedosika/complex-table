import React, {createContext, useContext} from "react";
import {useComplexTableContext} from "../useComplexTableContext";
import useSorting from "./useSorting";

const SortingContext = createContext({});

export const useSortingContext = () => useContext(SortingContext);

const SortingProvider = ({children}) => {
    const {rows} = useComplexTableContext();

    return <SortingContext.Provider value={useSorting(rows)}>
        {children}
    </SortingContext.Provider>
}

export default SortingProvider;