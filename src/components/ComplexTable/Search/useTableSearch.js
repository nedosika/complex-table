import {useState} from "react";

const useTableSearch = ({ rows, columns }) => {
  const [searchedRows, setSearchedRows] = useState(rows);
  const [value, setValue] = useState("");

  const searchRows = () => {
    setSearchedRows(
      rows.filter((row) =>
        columns.some(({ field }) =>
          String(row[field]).toLowerCase().includes(value.toLowerCase())
        )
      )
    );
  };

  return { searchRows, rows: searchedRows, value, setValue };
};

export default useTableSearch;
