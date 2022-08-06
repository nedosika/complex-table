import React from 'react';
import Button from "../../../modules/Sorting/Button";
import {SORT_DIRECTIONS} from "../../../helpers";
import Column from "../../Table/Main/Column";
import {useTableContext} from "../../Table/useTableContext";

const SortColumn = (props) => {
    const {column, children} = props;
    const {sortingActions: {toggle}, sort} = useTableContext();

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