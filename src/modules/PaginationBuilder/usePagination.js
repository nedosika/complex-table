import { useState } from "react";

const usePagination = (rows) => {
  const [rowCount, setRowCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(rows.length / rowCount);
  const rowsCount = rows.length;
  const fromRow = currentPage * rowCount - rowCount + 1;
  // const toRow =
  //     currentPage * rowCount > rowsCount ? rowsCount : currentPage * rowCount;

  const nextPage = () =>
    currentPage < rowsCount / rowCount && setCurrentPage((prevState) => prevState + 1);

  const prevPage = () =>
    currentPage > 1 && setCurrentPage((prevState) => prevState - 1);

  return { rowCount, nextPage, prevPage, currentPage, pagesCount, setRowCount, fromRow};
};

export default usePagination;
