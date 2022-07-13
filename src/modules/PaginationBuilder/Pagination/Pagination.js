import React from "react";
import styles from "./Pagination.module.scss";
import { useTableProps } from "../../../contexts/ComplexTable/ComplexTable";

const Pagination = ({ rowCount, currentPage, onNext, onPrev, pagesCount }) => {
  const { rows } = useTableProps();
  const rowsCount = rows.length;
  const fromRow = currentPage * rowCount - rowCount + 1;
  const toRow = currentPage * rowCount > rowsCount ? rowsCount :  currentPage * rowCount;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <p>Rows per page:</p>
        <div className={styles.select}>
          <div className={styles.rowCount}>{rowCount}</div>
          <input value={rowCount} />
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <p>
          {fromRow}–{toRow} of {rowsCount}
        </p>
        <div className={styles.actions}>
          <button title="Go to previous page" onClick={onPrev}>
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
            </svg>
          </button>
          <button title="Go to next page" onClick={onNext}>
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
