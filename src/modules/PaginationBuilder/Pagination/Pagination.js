import React, { useState } from "react";
import styles from "./Pagination.module.scss";
import { useTableProps } from "../../../contexts/ComplexTable/ComplexTable";
import ModalMenu from "../../../components/ModalMenu";
import useMenu from "../../../components/ModalMenu/useMenu";

const Pagination = ({
  onNext,
  onPrev,
  fromRow,
  rowCount,
  changeRowCount,
  rowsCount,
}) => {
  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const toRow = fromRow + rowCount <= rowsCount ? fromRow + rowCount -1: rowsCount;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <p>Rows per page:</p>
        <div className={styles.select} onClick={toggleMenu}>
          <div className={styles.rowCount}>{rowCount}</div>
          <input value={rowCount} />
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <ModalMenu
          isOpen={isOpen}
          onClose={toggleMenu}
          items={[1, 5, 10]}
          anchorEl={anchorEl}
          onColumnClick={changeRowCount}
        />
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
