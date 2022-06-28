import {useState} from "react";

const useCheckboxSelection = ({rows, getRowId}) => {
    const [selected, setSelected] = useState([]);

    const toggleSelected = (row) =>
        setSelected((prevState) =>
            prevState.includes(getRowId(row))
                ? prevState.filter((checkedId) => checkedId !== getRowId(row))
                : [...prevState, getRowId(row)]
        )

    const getIsSelected = (id) => selected.includes(getRowId(id));

    const toggleSelectedAll = () =>
        selected.length
            ? setSelected([])
            : setSelected(rows.map(getRowId));

    return {
        selected, toggleSelectedAll, toggleSelected, getIsSelected
    }
}

export default useCheckboxSelection;