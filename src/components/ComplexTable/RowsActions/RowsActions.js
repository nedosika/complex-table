import React, {createContext, useContext} from "react";
import TableProvider, {useTableContext} from "../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import RowsList from "./RowsList";

const RowsActionsContext = createContext({});

export const useRowsActionsContext = () => useContext(RowsActionsContext);

const RowsActions = ({children}) => {
    const {components} = useTableContext();
    return <RowsActionsContext.Provider value={{}}>
        <TableProvider value={{
            ...useTableContext(),
            components:{
                ...components,
                ColumnsList,
                RowsList
            }
        }}>
            {children}
        </TableProvider>
    </RowsActionsContext.Provider>
}

export default RowsActions;