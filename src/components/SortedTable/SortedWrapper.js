import React, {useState} from "react";
import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";

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

const SortedWrapper = (Table) => ({componentsProps, ...props}) => {
    const {rows} = props;

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    return <Table
        {...props}
        componentsProps={{
            ...componentsProps,
            Header: {
                ...componentsProps.Header,
                renderItem: ({field, headerName, width, sortable = true}) =>
                    <TableColumn width={width}>
                        <SortTitle content={headerName} sortable={sortable} toggle={toggle(field)}
                                   direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.DOWN}/>
                    </TableColumn>
            },
            Main: {
                items: sort.direction === SORT_DIRECTIONS.UP
                    ? [...rows].sort(compare(sort?.field)).reverse()
                    : [...rows].sort(compare(sort?.field))
            }
        }}
    />
}

export default SortedWrapper;