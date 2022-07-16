const {useState} = require("react");

const useToolbarColumns = (columns) => {
    const [filteredColumns, setColumns] = useState();

    return {filteredColumns}
}

export default useToolbarColumns;