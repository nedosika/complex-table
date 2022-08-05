import React from 'react';
import {useTableProps} from "../useComplexTableContext";
import {useSelection} from "./SelectionProvider";

const SelectionFooter = (props) => {
    const {columns, components: {Footer, RowCounter}} = useTableProps();
    const {selected} = useSelection();

    return (
        <Footer colSpan={columns.length + 1} {...props}>
            <RowCounter>
                {selected.length} row{selected.length > 1 && "s"} selected
            </RowCounter>
        </Footer>
    );
}

export default SelectionFooter;