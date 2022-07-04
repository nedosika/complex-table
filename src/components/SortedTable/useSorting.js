import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";

import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";
import TableHeader from "../Table/Main/Header";
import TableMain from "../Table/Main";
import TableRow from "../Table/Main/Row";

const useSorting = (props) => {
    const {rows} = props;

    const {Column, Header, Main} = Object.assign({
        Column: TableColumn,
        Header: TableHeader,
        Main: TableMain,
        Row: TableRow
    }, props.components)

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const components = {
        Header: (props) =>
            <Header
                {...props}
                renderItem={({field, headerName, width, sortable = true}) =>
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
                }
            />,
        Main: (props) =>
            <Main
                {...props}
                items={sort.direction === SORT_DIRECTIONS.UP
                    ? [...rows].sort(compare(sort?.field)).reverse()
                    : [...rows].sort(compare(sort?.field))}
            />
    }

    return {
        components,
        toggle,
    }
}

export default useSorting;