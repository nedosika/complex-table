import React from 'react';
import {useComplexTableContext} from "../useComplexTableContext";
import {useSelectionContext} from "./useSelectionContext";

const SelectionFooter = (props) => {
    const {columns, components: {Footer, RowCounter}} = useComplexTableContext();
    const {selected} = useSelectionContext();

    return (
        <Footer colSpan={columns.length + 1} {...props}>
            <RowCounter>
                {selected.length} row{selected.length > 1 && "s"} selected
            </RowCounter>
        </Footer>
    );
}

export default SelectionFooter;