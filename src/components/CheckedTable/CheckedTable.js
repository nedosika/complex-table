import React from 'react';
import Table from "../Table";
import CheckBoxSelection from "../Table/Main/CheckBoxSelection";
import Row from "../Table/Main/Row";
import useCheckboxSelection from "../../hooks/useCheckboxSelection";
import Header from "../Table/Main/Header/TableHeader";
import Column from "../Table/Main/Column/TableColumn";

const CheckedRow = ({isChecked, toggle, isShow, row, ...props}) =>
    <Row {...props}>
        {
            isShow &&
            <CheckBoxSelection isChecked={isChecked(row)} toggle={() => toggle(row)}/>
        }
    </Row>


const CheckedHeader = ({isShow, toggle, isChecked, ...props}) =>
    <Header {...props}>
        {
            isShow &&
            <Column separator={false} menu={false}>
                <CheckBoxSelection
                    isChecked={isChecked}
                    toggle={toggle}
                />
            </Column>
        }
    </Header>


const CheckedTable = ({rows, getRowId, checkboxSelection, ...props}) => {
    const {selected, toggleSelectedAll, toggleSelected, isSelected} = useCheckboxSelection({rows, getRowId});
    return (
        <Table
            {...props}
            rows={rows}
            components={{
                Row: CheckedRow,
                Header: CheckedHeader
            }}
            componentsProps={{
                Row: {
                    isChecked: isSelected,
                    toggle: toggleSelected,
                    isShow: checkboxSelection
                },
                Header: {
                    isChecked: selected.length,
                    toggle: toggleSelectedAll,
                    isShow: checkboxSelection
                }
            }}
        />
    );
};

export default CheckedTable;