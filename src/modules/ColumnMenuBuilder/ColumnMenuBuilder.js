import React, {useState} from 'react';
import Button from "../Sorting/Button";
import {SORT_DIRECTIONS} from "../../helpers";
import ColumnMenuIcon from "./ColumnMenuIcon";
import {useTableProps} from "../../contexts/ComplexTable/ComplexTable";
import Portal from "../../components/Portal";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {components: {Column, ColumnMenuIcon}, disableColumnMenu} = props;
    const [isOpen, setIsOpen] = useState(false);

    const MenuColumn = (props) => {
        const {children, column: {field, headerName}} = props;

        const handleClick = (event) => {
            event.stopPropagation();
            setIsOpen(!isOpen);
            console.log('click')
        }

        return (
            <Column {...props}>
                <ColumnMenuIcon onClick={handleClick}/>
            </Column>
        )
    }

    return {
        components: {
            Column: disableColumnMenu ? Column : MenuColumn,
        }
    }
};

export default ColumnMenuBuilder;