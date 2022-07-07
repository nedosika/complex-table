import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";
import Button from "./Button";

const Sorting = (props) => {
    console.log('sorting')
    const {rows, components: {Column, ColumnTitle}} = props;

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const SortColumn = (props) => {
        const {children, column: {field, headerName, sortable = true}} = props;

        return (
            sortable
                ? <Column {...props} onClick={toggle(field)}>
                    <ColumnTitle text={headerName}>
                        <Button direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.NONE}/>
                    </ColumnTitle>
                </Column>
                : <Column {...props}/>
        )
    }


    return {
        rows: sort.direction === SORT_DIRECTIONS.UP
            ? [...rows].sort(compare(sort?.field)).reverse()
            : [...rows].sort(compare(sort?.field)),
        components: {
            Column: SortColumn,
        }
    }
}

export default Sorting;