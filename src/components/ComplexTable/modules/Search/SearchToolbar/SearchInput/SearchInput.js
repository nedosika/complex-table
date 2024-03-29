import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import {useSearchingContext} from "../../useSearchingContext";

const SearchInput = ({ label, placeholder = "" }) => {
  const [value, setValue] = useState("");
  const {
    searchActions: { search },
  } = useSearchingContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <input
            type="text"
            defaultValue={value}
            onChange={(event) => setValue(event.target.value)}
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
