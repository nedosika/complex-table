import React, {useState} from "react";

import CheckBox from "./CheckBox";

const CheckBoxSelection = (props) => {
    console.log('checkbox')
    const {rows, getRowId, checkboxSelection, components: {Header, Footer, Row, RowCounter}} = props;
    const [selected, setSelected] = useState([]);

    const toggleSelected = (row) =>
        setSelected((prevState) =>
            prevState.includes(getRowId(row))
                ? prevState.filter((checkedId) => checkedId !== getRowId(row))
                : [...prevState, getRowId(row)]
        );

    const getIsSelected = (id) => selected.includes(getRowId(id));

    const toggleSelectedAll = () =>
        selected.length
            ? setSelected([])
            : setSelected(rows.map(getRowId));

    const selectOne = (row) => {
        setSelected([getRowId(row)]);
    }

    const CheckBoxHeader = (props) =>
        <Header {...props}>
            <CheckBox
                isChecked={selected.length}
                toggle={toggleSelectedAll}
            />
            {props.children}
        </Header>

    const CheckBoxRow = (props) =>
        <Row
            {...props}
            sx={{
                backgroundColor: getIsSelected(props.row) && 'rgba(25, 118, 210, 0.08)'
            }}
            onClick={() => selectOne(props.row)}
        >
            <CheckBox isChecked={getIsSelected(props.row)} toggle={(event) => {
                event.stopPropagation()
                toggleSelected(props.row)
            }}/>
        </Row>


    const CheckBoxFooter = (props) =>
        <Footer {...props}>
            <RowCounter>
                {selected.length} row{selected.length > 1 && 's'} selected
            </RowCounter>
        </Footer>

    return checkboxSelection ? {
        components: {
            ...props.components,
            Header: CheckBoxHeader,
            Row: CheckBoxRow,
            Footer: CheckBoxFooter
        }
    } : {}
}

export default CheckBoxSelection;