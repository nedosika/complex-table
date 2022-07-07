import React from 'react';
import Button from "../Sorting/Button";
import {SORT_DIRECTIONS} from "../../helpers";
//import ColumnMenuIcon from "./ColumnMenuIcon";
import {useTableProps} from "../../contexts/ComplexTable/ComplexTable";

const MenuColumn = (props) => {
    const {children, column: {field, headerName}} = props;
    const {
        components: {
            Column
        }
    } = useTableProps();

    return (
        <div>dfdf</div>
    )
}


const ColumnMenuBuilder = (props) => {
    console.log('column menu')
    const {components: {Column, ColumnTitle, ColumnMenuIcon}} = props;


    return {
        components: {
            Column: MenuColumn,
            // ColumnMenuIcon
        }
    }
};

export default ColumnMenuBuilder;