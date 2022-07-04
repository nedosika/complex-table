import React, {useState} from "react";

import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import CheckedFooter from "./CheckedFooter";

const useCheckboxSelection = (props) => {
    const {rows, columns, getRowId, checkboxSelection} = props;
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

    const selectOne = (row) =>
        setSelected([getRowId(row)]);

    const components = {
        Row: (props) =>
            <CheckedRow
                {...props}
                toggle={toggleSelected}
                isChecked={getIsSelected}
                isShow={checkboxSelection}
                selectOne={selectOne}
            />,
        Header: (props) =>
            <CheckedHeader
                {...props}
                checkboxSelection={checkboxSelection}
                isChecked={selected.length}
                toggle={toggleSelectedAll}
            />,
        Footer: CheckedFooter
    }

    return {
        components,
        selected,
        toggleSelectedAll,
        toggleSelected,
        getIsSelected,
        selectOne,
    }
}

export default useCheckboxSelection;