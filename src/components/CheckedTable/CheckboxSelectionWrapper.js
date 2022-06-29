import React from "react";
import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import CheckedFooter from "./CheckedFooter";
import useCheckboxSelection from "./useCheckboxSelection";

const CheckboxSelectionWrapper = (WrappedComponent) => (props) => {
    const {rows, getRowId, checkboxSelection} = props;
    const {selected, toggleSelectedAll, toggleSelected, getIsSelected} =
        useCheckboxSelection({rows, getRowId});

    return <WrappedComponent
        rows={rows}
        components={{
            Row: CheckedRow,
            Header: CheckedHeader,
            Footer: CheckedFooter
        }}
        componentsProps={{
            Row: {
                isShow: checkboxSelection,
                isChecked: getIsSelected,
                toggle: toggleSelected
            },
            Header: {
                isShow: checkboxSelection,
                isChecked: selected.length,
                toggle: toggleSelectedAll,
            },
            Footer: {
                isShow: checkboxSelection,
                checked: selected
            }
        }}
        {...props}
    />
}

export default CheckboxSelectionWrapper;