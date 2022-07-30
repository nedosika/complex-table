import React from "react";
import styles from "./Pagination.module.scss";
import ModalMenu from "../ModalMenu";
import useMenu from "../ModalMenu/useMenu";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  onNext,
  onPrev,
  fromRow,
  rowCount,
  changeRowCount,
  rowsCount,
}) => {
  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const toRow =
    fromRow + rowCount <= rowsCount ? fromRow + rowCount - 1 : rowsCount;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <p>Rows per page:</p>
        <div className={styles.select} onClick={toggleMenu}>
          <div className={styles.rowCount}>{rowCount}</div>
          <input defaultValue={rowCount} />
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
          getKey={(item) => item}
        />
        <p>
          {fromRow}–{toRow} of {rowsCount}
        </p>
        <div className={styles.actions}>
          <PaginationButton
            title="Go to previous page"
            onClick={onPrev}
            left
            disabled={fromRow === 1}
          />
          <PaginationButton
            title="Go to next page"
            onClick={onNext}
            disabled={fromRow === toRow}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
