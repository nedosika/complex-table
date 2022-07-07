import React, {createContext, useContext} from 'react';

import Table from "../../components/Table/Table";
import Column from "../../components/Table/Main/Column";
import Toolbar from "../../components/Table/Toolbar/Toolbar";
import Header from "../../components/Table/Main/Header";
import Footer from "../../components/Table/Footer";
import Row from "../../components/Table/Main/Row";
import Main from "../../components/Table/Main";
import Cell from "../../components/Table/Main/Cell";
import ColumnTitle from "../../components/Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../components/Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../../components/Table/Footer/RowCounter";
import ColumnMenuIcon from "../../components/Table/Main/Column/ColumnMenuIcon";

import {compose} from "../../helpers";
import Sorting from "../../modules/Sorting/Sorting";
import CheckBoxSelection from "../../modules/CheckBoxSelection/CheckBoxSelection";
import Filtration from "../../modules/Filtration";
import ColumnMenu from "../../modules/ColumnMenu";

const MODULES = [ColumnMenu]

const TableContext = createContext({
    components: {
        Main,
        Toolbar,
        Header,
        Footer,
        Row,
        Cell,
        Column,
        ColumnMenu,
        ColumnTitle,
        ColumnMenuIcon,
        ColumnResizeIcon,
        RowCounter
    }
});

const ComplexTable = (props) => {
    const defaultProps = useTableProps();

    return (
        <TableContext.Provider value={compose(...MODULES)({...props, ...defaultProps})}>
            <Table/>
        </TableContext.Provider>
    )
}

export const useTableProps = () =>
    useContext(TableContext);


export default ComplexTable;