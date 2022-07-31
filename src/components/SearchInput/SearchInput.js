import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ label, placeholder = '' }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <input type="text" placeholder={placeholder}/>
        <fieldset>
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};

export default SearchInput;
