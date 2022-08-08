import { useState } from "react";

const useTableSearch = ({ rows, columns }) => {
  const [searchValue, setSearchedValue] = useState("");

  const search = (value) => {
    setSearchedValue(value)
  };

  return {
    rows: rows.filter((row) =>
      columns.some(({ field }) =>
        String(row[field]).toLowerCase().includes(searchValue.toLowerCase())
      )
    ),
    searchActions:{
      search,
    }
  };
};

export default useTableSearch;
