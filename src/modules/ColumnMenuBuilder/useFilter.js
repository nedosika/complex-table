import {useState} from "react";
import {getUniq} from "../../helpers";

const useFilter = (rows, columns) => {
    const [filter, setFilter] = useState(Object.assign(
        {},
        ...columns.map((column) =>
            ({[column.field]: Object.assign(
                {},
                        ...getUniq(rows.map(row => row[column.field])).map((row) =>
                        ({[row]: false}))
                )})
        )
    ));

    console.log(filter)

    const [activeField, setActiveField] = useState();

    const filtered = rows.filter((row) => columns.map(({field}) => filter[field][row[field]]).includes(true));

    const activeMenuItems = filter[activeField] && Object.entries(filter[activeField])

    const handleChangeFilter = (item) => {
        setFilter((prevState) => ({
            ...prevState,
            [activeField]: {
                ...prevState[activeField],
                [item]: !prevState[activeField][item]
            }
        }))
    }

    return {filtered, setFilter: handleChangeFilter, activeMenuItems, setActiveField}
}

export default useFilter;