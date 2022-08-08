import { useState } from "react";

const usePagination = ({rows, page, pageSize}) => {
  const [rowCount, setRowCount] = useState(pageSize);
  const [currentPage, setCurrentPage] = useState(page);
  const pagesCount = Math.ceil(rows.length / rowCount);
  const rowsCount = rows.length;
  const fromRow = (currentPage + 1) * rowCount - rowCount;

  const onNext = () => setCurrentPage((prevState) => prevState + 1);

  const onPrev = () => setCurrentPage((prevState) => prevState - 1);

  const changeRowCount = (rowCount) => {
    setCurrentPage(page);
    setRowCount(rowCount);
  };

  return {
    rows: [...rows].splice(fromRow, rowCount),
    rowCount,
    rowsCount,
    currentPage,
    pagesCount,
    fromRow,
    paginationActions: {
      changeRowCount,
      onNext,
      onPrev
    }
  };
};

export default usePagination;
