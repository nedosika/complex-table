import React from 'react';
import Table from "../Table";

import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import useCheckboxSelection from "./useCheckboxSelection";
import CheckedFooter from "./CheckBoxSelection/CheckedFooter";

const CheckedTable = (props) => {
    const {rows, getRowId, checkboxSelection} = props;
    const {selected, toggleSelectedAll, toggleSelected, getIsSelected} = useCheckboxSelection({rows, getRowId});

    return (
        <Table
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
    );
};

export default CheckedTable;