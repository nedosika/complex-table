import React from 'react';
import Table from "../Table";

import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import useCheckboxSelection from "./useCheckboxSelection";
import TableFooter from "../Table/Footer";
import RowCounter from "../Table/Footer/RowCounter";

const CheckedFooter = ({isShow, checked, ...props}) =>
    <TableFooter {...props}>
        {
            isShow &&
            <RowCounter>
                {checked.length} row{checked.length > 1 && 's'} selected
            </RowCounter>
        }
    </TableFooter>

const CheckedTable = ({rows, getRowId, checkboxSelection, ...props}) => {
    const {selected, toggleSelectedAll, toggleSelected, getIsSelected} = useCheckboxSelection({rows, getRowId});

    return (
        <Table
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
    );
};

export default CheckedTable;