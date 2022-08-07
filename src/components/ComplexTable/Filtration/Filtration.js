import React from 'react';
import TableProvider, {useTableContext} from "../../Table/useTableContext";
import useFilter from "./useFilter";
import ColumnsList from "./ColumnsList";

const Filtration = ({children}) => {
    const {components, rows, columns} = useTableContext();
    return (
        <TableProvider value={{
            ...useTableContext(),
            ...useFilter({rows, columns}),
            components:{
                ...components,
                ColumnsList
            }
        }}>
            {children}
        </TableProvider>
    );
};

export default Filtration;