import React, {createContext, useContext} from "react";
import useSorting from "./useSorting";
import {useComplexTableContext} from "../useComplexTableContext";

const SortingContext = createContext({});

export const useSortingContext = () => useContext(SortingContext);

const SortingProvider = ({children}) => {
    const {rows} = useComplexTableContext();

    console.log(useComplexTableContext())

    return <SortingContext.Provider value={useSorting(rows)}>
        {children}
    </SortingContext.Provider>
}

export default SortingProvider;