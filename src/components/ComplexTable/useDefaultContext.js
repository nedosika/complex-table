import React, { createContext, useContext } from "react";
import TableProvider, {useTableContext} from "../Table/useTableContext";
import Table from "../Table/Table";
import Header from "../Table/Header";
import Main from "../Table/Main";
import Column from "../Table/Main/Column";
import ColumnTitle from "../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Table/Main/Column/ColumnResizeIcon";
import RowsList from "../Table/RowsList";
import Footer from "../Table/Footer";
import Toolbar from "../Table/Header/Toolbar";
import ColumnsList from "../Table/ColumnsList";
import Row from "../Table/Main/Row";
import Cell from "../Table/Main/Cell";
import {COMPLEX_TABLE_CONFIG} from "./useComplexTableContext";
import {useRootContext} from "../Table/useRootContext";

const defaultComponents = {
    Table,
    Header,
    Main,
    Column,
    ColumnTitle,
    ColumnResizeIcon,
    RowsList,
    Footer,
    Toolbar,
    ColumnsList,
    Row,
    Cell,
};

const DefaultContext = createContext({});

export const useDefaultContext = () => useContext(DefaultContext);

const DefaultProvider = ({ children }) => {
    const {components: rootComponents} = useRootContext();
    const {components, ...props} = useTableContext();
    const newComponents = Object.assign(defaultComponents, components, rootComponents);

    return (
        <TableProvider components={newComponents} {...props}>
            {children}
        </TableProvider>
    );
};

export default DefaultProvider;
