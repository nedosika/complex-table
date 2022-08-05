import {useState} from "react";

const useTableRows = (rows) => {
    const [tableRows, setTableRows] = useState(rows);

    return {tableRows, setTableRows}
}

export default useTableRows;