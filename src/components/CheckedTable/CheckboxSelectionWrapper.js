import React from "react";
import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import CheckedFooter from "./CheckedFooter";
import useCheckboxSelection from "./useCheckboxSelection";

const CheckboxSelectionWrapper = (WrappedComponent) => (props) => {
    const {rows, getRowId, checkboxSelection, components, componentsProps} = props;
    const {selected, toggleSelectedAll, toggleSelected, getIsSelected, selectOne} =
        useCheckboxSelection({rows, getRowId});

    return <WrappedComponent
        {...props}
        components={{
            ...components,
            Row: CheckedRow,
            Header: CheckedHeader,
            Footer: CheckedFooter
        }}
        componentsProps={{
            ...componentsProps,
            Row: {
                isShow: checkboxSelection,
                isChecked: getIsSelected,
                toggle: toggleSelected,
                selectOne
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
    />
}

export default CheckboxSelectionWrapper;