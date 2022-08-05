import { useState } from "react";

const useTableSearch = ({ rows, columns }) => {
  const [searchedValue, setSearchedValue] = useState("");
  const [value, setValue] = useState("");

  const searchRows = () => {
    setSearchedValue(value)
  };

  return {
    searchRows,
    rows: rows.filter((row) =>
      columns.some(({ field }) =>
        String(row[field]).toLowerCase().includes(searchedValue.toLowerCase())
      )
    ),
    value,
    setValue,
  };
};

export default useTableSearch;
