import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";
import SortBtn from "./Sort";

const useSorting = (props) => {
    console.log('sorting')
    const {rows, components: {Column, Main}} = props;

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const SortColumn = (props) => {
        const {column: {field, sortable = true}} = props;

        return sortable
            ? <Column {...props} onClick={toggle(field)}>
                <SortBtn direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.NONE}/>
            </Column>
            : <Column {...props}/>
    }

    const SortMain = (props) =>
        <Main
            {...props}
            rows={sort.direction === SORT_DIRECTIONS.UP
                ? [...rows].sort(compare(sort?.field)).reverse()
                : [...rows].sort(compare(sort?.field))}
        />

    return {
        components: {
            Column: SortColumn,
            Main: SortMain
        }
    }
}

export default useSorting;