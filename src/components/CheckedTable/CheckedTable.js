import React from 'react';
import Table from "../Table";
import CheckBoxSelection from "../Table/Main/CheckBoxSelection";
import Row from "../Table/Main/Row";
import useCheckboxSelection from "../../hooks/useCheckboxSelection";

const CheckedRow = ({isChecked, toggle, isShow, row, ...props}) => {
    return (
        <Row {...props}>
            {
                isShow &&
                <CheckBoxSelection isChecked={isChecked(row)} toggle={() => toggle(row)}/>
            }
        </Row>
    )
}


const CheckedTable = ({rows, getRowId, checkboxSelection, ...props}) => {
    const {selected, toggleSelectedAll, toggleSelected, isSelected} = useCheckboxSelection({rows, getRowId});
    return (
        <Table
            {...props}
            rows={rows}
            components={{
                Row: CheckedRow
            }}
            componentsProps={{
                Row: {
                    isChecked: isSelected,
                    toggle: toggleSelected,
                    isShow: checkboxSelection
                }
            }}
        />
    );
};

export default CheckedTable;