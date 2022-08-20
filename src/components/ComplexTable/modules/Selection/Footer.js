import React from 'react';
import {useTableContext} from "../../../Table/useTableContext";
import Footer from "../../../Table/Footer";
import {useSelectionContext} from "./Selection";
import RowCounter from "../../../Table/Footer/RowCounter";

const SelectionFooter = (props) => {
    const {columns } = useTableContext();
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