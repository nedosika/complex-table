import React from 'react';
import {useTableContext} from "../../Table/useTableContext";
import Footer from "../../Table/Footer";

const SelectionFooter = (props) => {
    const {columns, components: {RowCounter}, selected} = useTableContext();

    return (
        <Footer colSpan={columns.length + 1} {...props}>
            <RowCounter>
                {selected.length} row{selected.length > 1 && "s"} selected
            </RowCounter>
        </Footer>
    );
}

export default SelectionFooter;