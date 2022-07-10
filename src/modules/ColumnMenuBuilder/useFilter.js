import {useState} from "react";

const useFilter = (rows, field) => {
    const [filteredRows, setFilteredRows] = useState([...rows]);
    //console.log(filteredRows)

    const handleChangeFilter = (filter) => {
        //console.log(rows, filter)
        // setFilteredRows((prevState) => {
        //     console.log('log', prevState.filter((item) => {
        //         return item[field] === filter
        //     }));
        //
        //     return prevState.filter((item) => item[field] === filter)
        // })
    }

    return {filteredRows, handleChangeFilter}
}

export default useFilter;