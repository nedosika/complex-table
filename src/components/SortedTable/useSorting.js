import React, {useState} from "react";
import {compare, getDirection, SORT_DIRECTIONS} from "../../helpers";
import SortBtn from "./Sort";

const useSorting = (props) => {
    console.log('sorting')
    const {rows, components: {Column, Header, Main, ColumnSeparator, ColumnTitle}} = props;

    const [sort, setSort] = useState({})

    const toggle = (sortedField) => () =>
        setSort(({direction, field}) => ({
            direction: field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
            field: sortedField
        }));

    return {
        components: {
            Header: (props) =>
                <Header
                    {...props}
                    renderItem={(item) => {
                        const {field, sortable = true} = item;

                        return <Column
                            column={item}
                            renderTitle={(title) => sortable
                                ?
                                <ColumnTitle onClick={toggle(field)} renderContent={title}>
                                    <SortBtn
                                        direction={sort.field === item.field ? sort.direction : SORT_DIRECTIONS.NONE}
                                    />
                                </ColumnTitle>
                                :
                                <ColumnTitle renderContent={title}/>
                            }
                            renderSeparator={ColumnSeparator}
                        />
                    }}
                />,
            Main: (props) =>
                <Main
                    {...props}
                    items={sort.direction === SORT_DIRECTIONS.UP
                        ? [...rows].sort(compare(sort?.field)).reverse()
                        : [...rows].sort(compare(sort?.field))}
                />
        }
    }
}

export default useSorting;