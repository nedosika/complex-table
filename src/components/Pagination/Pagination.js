import React from "react";
import styles from "./Pagination.module.scss";
import PaginationButton from "./PaginationButton";
import useMenu from "../Menu/useMenu";
import {
  PAGINATION_CONFIG,
  usePaginationContext,
} from "../ComplexTable/modules/Pagination/usePaginationContext";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import { useTableContext } from "../Table/useTableContext";

const Pagination = () => {
  const {
    paginationActions: { onNext, onPrev, changeRowCount },
    fromRow,
    rowCount,
    rowsCount,
  } = usePaginationContext();
  const { [PAGINATION_CONFIG.rowsPerPageOptions]: rowsPerPageOptions } =
    useTableContext();
  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const toRow = fromRow + rowCount;

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Menu isOpen={isOpen} anchorEl={anchorEl} onClose={toggleMenu}>
          {rowsPerPageOptions.map((item) => (
            <MenuItem key={item} onClick={() => changeRowCount(item)}>
              {item}
            </MenuItem>
          ))}
        </Menu>
        <p>Rows per page:</p>
        <div className={styles.select} onClick={toggleMenu}>
          <div className={styles.rowCount}>{rowCount}</div>
          <input defaultValue={rowCount} />
          <svg focusable="false" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
        <p>
          {fromRow + 1}–{toRow < rowsCount ? toRow : rowsCount} of {rowsCount}
        </p>
        <div className={styles.actions}>
          <PaginationButton
            title="Go to previous page"
            onClick={onPrev}
            left
            disabled={fromRow === 0}
          />
          <PaginationButton
            title="Go to next page"
            onClick={onNext}
            disabled={toRow >= rowsCount}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
