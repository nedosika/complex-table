import { useState } from "react";
import {SEARCHING_CONFIG} from "./Searching";

const useTableSearch = ({ rows, columns }) => {
  const [searchValue, setSearchedValue] = useState("");

  const search = (value) => {
    setSearchedValue(value)
  };

  return {
    rows: rows.filter((row) =>
      columns.some((column) =>
            column[SEARCHING_CONFIG.searchable] && String(row[column.field]).toLowerCase().includes(searchValue.toLowerCase())
      )
    ),
    searchActions:{
      search,
    }
  };
};

export default useTableSearch;
