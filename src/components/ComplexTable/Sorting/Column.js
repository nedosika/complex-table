import React from 'react';
import Button from "../../../modules/Sorting/Button";
import {SORT_DIRECTIONS} from "../../../helpers";
import {useSortingContext} from "./useSortingContext";
import Column from "../../Table/Main/Column";

const SortColumn = (props) => {
    const {column, children} = props;
    const {toggle, sort} = useSortingContext();
    console.log(column)

    return (
        column?.sortable
            ? <Column {...props} onClick={toggle(column.field)} style={{  cursor: 'pointer'}}>
                <Button direction={sort.field === column.field ? sort.direction : SORT_DIRECTIONS.NONE}/>
                {children}
            </Column>
            : <Column {...props}/>
    )
}

export default SortColumn;