import { useState } from "react";

const usePagination = (rows) => {
  const [rowCount, setRowCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(rows.length / rowCount);
  const rowsCount = rows.length;
  const fromRow = currentPage * rowCount - rowCount + 1;

  const nextPage = () =>
    currentPage < rowsCount / rowCount && setCurrentPage((prevState) => prevState + 1);

  const prevPage = () =>
    currentPage > 1 && setCurrentPage((prevState) => prevState - 1);

  const changeRowCount = (rowCount, event) => {
    setCurrentPage(1)
    setRowCount(rowCount);
  }

  return { rowCount, rowsCount, nextPage, prevPage, currentPage, pagesCount, changeRowCount, fromRow};
};

export default usePagination;
