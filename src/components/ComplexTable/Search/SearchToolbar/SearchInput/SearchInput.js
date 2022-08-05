import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import {useTableProps} from "../../../useComplexTableContext";
import {useSearch} from "../../SearchProvider";

const SearchInput = ({ label, placeholder = "" }) => {
  const { rows, columns, setTableRows } = useTableProps();
  //const {setSearchedRows} = useSearch();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTableRows(rows.filter((row) =>
        columns.some(({ field }) => String(row[field]).toLowerCase().includes(searchValue.toLowerCase()))
      ))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <input
            type="text"
            defaultValue={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder={placeholder}
          />
          <fieldset>
            <legend>
              <span>{label}</span>
            </legend>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
