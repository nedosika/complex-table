import React from 'react';

import Table from "../Table/Table";
import {compose} from "../../helpers";
import useSorting from "../SortedTable/useSorting";
import useCheckboxSelection from "../CheckedTable/useCheckboxSelection";
import useFiltering from "../FilteredTable";
import TableColumn from "../Table/Main/Column";
import Title from "../Table/Main/Column/Title";
import TableToolbar from "../Table/Toolbar/Toolbar";
import TableHeader from "../Table/Main/Header";
import TableFooter from "../Table/Footer";
import TableRow from "../Table/Main/Row";
import TableMain from "../Table/Main";
import TableCell from "../Table/Main/Cell";
import ColumnTitle from "../Table/Main/Column/Title/Title";
import TableHeaderMenu from "../Table/Main/MenuButton/MenuButton";
import TableColumnSeparator from "../Table/Main/Separator/Separator";
import RowCounter from "../Table/Footer/RowCounter";

const ComplexTable = (props) => {
    const {components} = props;

    return (
        <Table {...compose(useFiltering, useCheckboxSelection, useSorting)({
            ...props,
            components: {
                Toolbar: TableToolbar,
                Header: TableHeader,
                Footer: TableFooter,
                Row: TableRow,
                Cell: TableCell,
                Column: TableColumn,
                Main: TableMain,
                RowCounter,
                ...components
            }
        })}
        />
    )
}


export default ComplexTable;