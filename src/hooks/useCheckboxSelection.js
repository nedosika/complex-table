import {useState} from "react";

const useCheckboxSelection = ({rows, getRowId}) => {
    const [selected, setSelected] = useState([]);

    console.log(selected)

    const toggleSelected = (row) =>
        setSelected((prevState) =>
            prevState.includes(getRowId(row))
                ? prevState.filter((checkedId) => checkedId !== getRowId(row))
                : [...prevState, getRowId(row)]
        )


    const isSelected = (id) => selected.includes(getRowId(id))

    const toggleSelectedAll = () =>
        selected.length
            ? setSelected([])
            : setSelected(rows.map(getRowId));

    return {
        selected, toggleSelectedAll, toggleSelected, isSelected
    }
}

export default useCheckboxSelection;