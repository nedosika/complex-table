import {useState} from "react";

const useCheckboxSelection = (rows) => {
    const [checked, setChecked] = useState([]);

    const updateChecked = (id) =>
        setChecked((prevState) =>
            prevState.includes(id)
                ? prevState.filter((checkedId) => checkedId !== id)
                : [...prevState, id]
        )


    const setAll = () =>
        checked.length
            ? setChecked([])
            : setChecked(rows.map((row) => row.id));

    return {
        checked, setAll, updateChecked
    }
}

export default useCheckboxSelection;