import {useState} from "react";

const useCheckboxSelection = (rows) => {
    const [selected, setSelected] = useState([]);

    const toggleSelected = (id) =>
        setSelected((prevState) =>
            prevState.includes(id)
                ? prevState.filter((checkedId) => checkedId !== id)
                : [...prevState, id]
        )


    const toggleSelectedAll = () =>
        selected.length
            ? setSelected([])
            : setSelected(rows.map((row) => row.id));

    return {
        selected, toggleSelectedAll, toggleSelected
    }
}

export default useCheckboxSelection;