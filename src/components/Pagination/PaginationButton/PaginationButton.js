import React from "react";
import styles from "./PaginationButton.module.scss";

const PaginationButton = ({ onClick, title, disabled, left }) => {
  const path = left
    ? "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
    : "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z";

  return (
    <button
      className={styles.root}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      <svg
        viewBox="0 0 24 24"
        style={{ color: disabled && "rgba(0, 0, 0, 0.26)" }}
      >
        <path d={path} />
      </svg>
    </button>
  );
};

export default PaginationButton;
