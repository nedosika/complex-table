import {useState} from "react";
import {getUniq} from "../../../helpers";

const useFilter = ({rows, columns}) => {
    const [activeField, setActiveField] = useState();
    const [filter, setFilter] = useState({});
    const [filters, setFilters] = useState(Object.assign(
        {},
        ...columns.map((column) =>
            ({
                [column.field]: Object.assign(
                    {},
                    ...getUniq(rows.map(row => row[column.field])).map((row) =>
                        ({[row]: true}))
                )
            })
        )
    ));

    const updateActiveField = (field) => {
        setActiveField(field);
        setFilter({
            ...filters[field]
        })
    }

    const toggleFilter = ([item], event) => {
        event.stopPropagation();
        setFilter((prevState) => ({
                ...prevState,
                [item]: !prevState[item]
            }
        ))
    }

    const applyFilter = () =>
        setFilters((prevState) => ({
            ...prevState,
            [activeField]: {
                ...prevState[activeField],
                ...filter
            }
        }));

    const clearFilter = () =>
        setFilters((prevState) => ({
            ...prevState,
            [activeField]: Object.assign(
                {},
                ...getUniq(rows.map(row => row[activeField])).map((row) =>
                    ({[row]: true}))
            )
        }));

    const filtered = rows.filter((row) =>
        !columns.map(({field}) => filters[field][row[field]]).includes(false)
    );

    const menuItems = Object.entries(filter);

    return {
        rows: filtered,
        menuItems,
        filtrationActions:{
            updateActiveField,
            applyFilter,
            clearFilter,
            toggleFilter,
        }
    }
}

export default useFilter;