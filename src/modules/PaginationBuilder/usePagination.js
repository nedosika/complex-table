import { useState } from "react";

const usePagination = (rows) => {
  const [rowCount, setRowCount] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = Math.ceil(rows.length / rowCount);

  const nextPage = () =>
    currentPage < rows.length / rowCount && setCurrentPage((prevState) => prevState + 1);

  const prevPage = () =>
    currentPage > 1 && setCurrentPage((prevState) => prevState - 1);

  return { rowCount, nextPage, prevPage, currentPage, pagesCount };
};

export default usePagination;
