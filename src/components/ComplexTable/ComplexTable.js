import React from 'react';

import Table from "../Table/Table";
import {compose} from "../../helpers";
import useSorting from "../SortedTable/useSorting";
import useCheckboxSelection from "../CheckedTable/useCheckboxSelection";
import useFiltering from "../FilteredTable";
import Column from "../Table/Main/Column";
import Toolbar from "../Table/Toolbar/Toolbar";
import Header from "../Table/Main/Header";
import Footer from "../Table/Footer";
import Row from "../Table/Main/Row";
import Main from "../Table/Main";
import Cell from "../Table/Main/Cell";
import ColumnTitle from "../Table/Main/Column/Title";
import ColumnSeparator from "../Table/Main/Separator/Separator";
import RowCounter from "../Table/Footer/RowCounter";

const ComplexTable = (props) => {
    const {columns, components} = props;

    return (
        <Table {...compose(useSorting)({
            ...props,
            components: {
                Toolbar,
                Header,
                Footer,
                Row,
                Cell,
                Column,
                ColumnTitle,
                ColumnSeparator,
                Main,
                RowCounter,
                ...components
            }
        })}
        />
    )
}


export default ComplexTable;