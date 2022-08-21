import { useState } from "react";
import {useTableContext} from "../../../Table/useTableContext";

export const SEARCHING_CONFIG = {
  searchable: 'searchable'
}

const useTableSearch = () => {
  const { rows, columns } = useTableContext();
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
