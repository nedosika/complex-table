import React  from "react";
import styles from "./SearchInput.module.scss";
import { useSearchContext } from "../../useSearchContext";

const SearchInput = ({ label, placeholder = "" }) => {
  const { searchRows, value, setValue } = useSearchContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRows();
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
