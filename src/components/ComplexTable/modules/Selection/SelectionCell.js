import React from 'react';
import CheckBox from "./CheckBox";
import {useTableContext} from "../../../Table/useTableContext";
import {SELECTION_CONFIG, useSelectionContext} from "./useSelectionContext";

const SelectionCell = ({row}) => {
    const {
        components: { Cell, CheckBox },
        [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
    } = useTableContext();
    const {
        selectionActions: { toggleSelected, getIsSelected },
    } = useSelectionContext();

    const handleSelect = (row) => (event) => {
        event.stopPropagation();
        toggleSelected(row);
    };

    return (
        checkboxSelection && (
            <Cell onClick={handleSelect(row)} style={{ cursor: "pointer" }}>
                <CheckBox isChecked={getIsSelected(row)} />
            </Cell>
        )
    );
};

export default SelectionCell;