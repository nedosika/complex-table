import {useState} from "react";

const useCheckboxSelection = ({rows, getRowId}) => {
    const [selected, setSelected] = useState([]);

    console.log(selected)

    const toggleSelected = (id) =>
        setSelected((prevState) =>
            prevState.includes(id)
                ? prevState.filter((checkedId) => checkedId !== id)
                : [...prevState, id]
        )


    const toggleSelectedAll = () =>
        selected.length
            ? setSelected([])
            : setSelected(rows.map(getRowId));

    return {
        selected, toggleSelectedAll, toggleSelected
    }
}

export default useCheckboxSelection;