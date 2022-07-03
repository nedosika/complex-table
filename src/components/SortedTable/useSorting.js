import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";

import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";
import Title from "../Table/Main/Column/Title";
import Separator from "../Table/Main/Separator";

const useSorting = (props) => {
    const {rows} = props;
    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    const componentsProps = {
        Header: {
            renderItem: ({field, headerName, width, sortable = true}) =>
                <TableColumn width={width}>
                    {
                        sortable
                            ? <SortTitle content={headerName} toggle={toggle(field)}
                                         direction={sort.field === field ? sort.direction : SORT_DIRECTIONS.NONE}/>
                            : <Title content={headerName}/>
                    }
                    <Separator/>
                </TableColumn>
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