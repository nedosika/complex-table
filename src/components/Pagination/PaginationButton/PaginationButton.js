import React from "react";
import styles from "./PaginationButton.module.scss";

const SVG_PATHS = {
  left: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z",
  right: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z",
};

const PaginationButton = ({ onClick, title, disabled, left }) => {
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
        <path d={left ? SVG_PATHS.left : SVG_PATHS.right} />
      </svg>
    </button>
  );
};

export default PaginationButton;
