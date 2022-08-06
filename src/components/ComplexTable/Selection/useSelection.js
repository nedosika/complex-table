import {useState} from "react";

const useSelection = ({rows, getRowId}) => {
    const [selected, setSelected] = useState([]);

    const toggleSelected = (row) =>
        setSelected((prevState) =>
            prevState.includes(getRowId(row))
                ? prevState.filter((checkedId) => checkedId !== getRowId(row))
                : [...prevState, getRowId(row)]
        );

    const getIsSelected = (row) => {
        return selected.includes(getRowId(row));
    };

    const toggleSelectedAll = () =>
        selected.length ? setSelected([]) : setSelected(rows.map(getRowId));

    const selectOne = (row) => {
        setSelected([getRowId(row)]);
    };

    return {
        selectionActions: {
            toggleSelected,
            getIsSelected,
            toggleSelectedAll,
            selectOne
        },
        selected
    }
}

export default useSelection;