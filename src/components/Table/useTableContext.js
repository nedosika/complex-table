import React, {createContext, useContext} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Table from "./Table";
import RowsList from "./Main/RowsList";
import Toolbar from "./Toolbar";
import Column from "./Main/Column";
import ColumnTitle from "./Main/Column/ColumnTitle";
import ColumnResizeIcon from "./Main/Column/ColumnResizeIcon";
import {useComplexTableContext} from "../ComplexTable/useComplexTableContext";
import Row from "./Main/Row";
import Cell from "./Main/Cell";

const TableContext = createContext({});

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({children}) => {
    console.log(useComplexTableContext())
    const {rows, columns}  = useComplexTableContext()

    return <TableContext.Provider value={{
        rows, columns,
        getRowId: (row) => row.id,
        getRowHeight: () => "auto",
        components: {
          Header,
          Main,
          Footer,
          Table,
          RowsList,
          Toolbar,
          Row,
          Cell,
          Column,
          ColumnTitle,
          // ColumnMenu,
          // ColumnMenuIcon,
          ColumnResizeIcon,
          // RowCounter,
        },
    }}>
        {children}
    </TableContext.Provider>
}

export default TableProvider;