import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";

import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";

const useSorting = (props) => {
    const {rows, components} = props;

    const {Column} = Object.assign({Column: TableColumn}, components)

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const componentsProps = {
        Header: {
            renderItem: ({field, headerName, width, sortable = true}) =>
                <Column
                    width={width}
                    title={
                        <SortTitle
                            sortable={sortable}
                            content={headerName}
                            onClick={toggle(field)}
                            direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.NONE}
                        />
                    }
                />
        },
        Main: {
            items: sort.direction === SORT_DIRECTIONS.UP
                ? [...rows].sort(compare(sort?.field)).reverse()
                : [...rows].sort(compare(sort?.field))
        }
    }

    return {
        componentsProps,
        toggle,
    }
}

export default useSorting;