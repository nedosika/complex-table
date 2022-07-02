import React, {useState} from "react";
import TableColumn from "../Table/Main/Column";
import SortTitle from "./SortTitle";
import Title from "../Table/Main/Column/Title";

export const SORT_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    NONE: 'none'
}

const compare = (field) => (a, b) => {
    if (a[field] < b[field]) {
        return -1;
    }
    if (a[field] > b[field]) {
        return 1;
    }
    return 0;
}

const getDirection = (direction) => {
    switch (direction) {
        case SORT_DIRECTIONS.NONE:
            return SORT_DIRECTIONS.DOWN;
        case SORT_DIRECTIONS.DOWN:
            return SORT_DIRECTIONS.UP;
        default:
            return SORT_DIRECTIONS.NONE
    }
}

const useSorting = (props) => {
    const {rows} = props;
    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const componentsProps = {
        ...props.componentsProps,
        Header: {
            ...props.componentsProps?.Header,
            renderItem: ({field, headerName, width, sortable = true}) =>
                <TableColumn width={width}>
                    {
                        sortable
                            ? <SortTitle content={headerName} toggle={toggle(field)}
                                         direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.NONE}/>
                            : <Title content={headerName}/>
                    }
                </TableColumn>
        },
        Main: {
            ...props.componentsProps?.Main,
            items: sort.direction === SORT_DIRECTIONS.UP
                ? [...rows].sort(compare(sort?.field)).reverse()
                : [...rows].sort(compare(sort?.field))
        }
    }

    return {
        ...props,
        toggle,
        componentsProps,
    }
}

export default useSorting;