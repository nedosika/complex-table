import {useState} from "react";

import CheckedRow from "./CheckedRow";
import CheckedHeader from "./CheckedHeader";
import CheckedFooter from "./CheckedFooter";

const useCheckboxSelection = (props) => {
    const {rows, getRowId, checkboxSelection} = props;
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
        Row: CheckedRow,
        Header: CheckedHeader,
        Footer: CheckedFooter
    }

    const componentsProps = {
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
    }

    return {
        components,
        componentsProps,
        selected,
        toggleSelectedAll,
        toggleSelected,
        getIsSelected,
        selectOne,
    }
}

export default useCheckboxSelection;