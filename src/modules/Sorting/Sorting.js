import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";
import Button from "./Button";

const Sorting = (props) => {
    console.log('sorting')
    const {showedRows: rows, components: {Column}} = props;

    const [sort, setSort] = useState({});

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const SortColumn = (props) => {
        const {children, column} = props;

        return (
            column?.sortable
                ? <Column {...props} onClick={toggle(column.field)} style={{  cursor: 'pointer'}}>
                    <Button direction={sort.field === column.field ? sort.direction : SORT_DIRECTIONS.NONE}/>
                    {children}
                </Column>
                : <Column {...props}/>
        )
    }

    return {
        showedRows: sort.direction === SORT_DIRECTIONS.UP
            ? [...rows].sort(compare(sort?.field)).reverse()
            : [...rows].sort(compare(sort?.field)),
        components: {
            ...props.components,
            Column: SortColumn,
        }
    }
}

export default Sorting;