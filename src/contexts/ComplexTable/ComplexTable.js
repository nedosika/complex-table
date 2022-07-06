import React, {createContext, useContext} from 'react';

import Table from "../../components/Table/Table";
import Column from "../../components/Table/Main/Column";
import Toolbar from "../../components/Table/Toolbar/Toolbar";
import Header from "../../components/Table/Main/Header";
import Footer from "../../components/Table/Footer";
import Row from "../../components/Table/Main/Row";
import Main from "../../components/Table/Main";
import Cell from "../../components/Table/Main/Cell";
import ColumnTitle from "../../components/Table/Main/Column/Title";
import ColumnResizeIcon from "../../components/Table/Main/Column/ColumnResizeIcon";
import RowCounter from "../../components/Table/Footer/RowCounter";
import ColumnMenu from "../../components/Table/Main/Column/ColumnMenu";

import {compose} from "../../helpers";
import Sorting from "../../modules/Sorting/Sorting";
import CheckBoxSelection from "../../modules/CheckBoxSelection/CheckBoxSelection";
import Filtration from "../../modules/Filtration";

const MODULES = [CheckBoxSelection, Sorting, Filtration]

const TableContext = createContext({
    components: {
        Toolbar,
        Header,
        Footer,
        Row,
        Cell,
        Column,
        ColumnTitle,
        ColumnMenu,
        ColumnResizeIcon,
        Main,
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