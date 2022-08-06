import React from "react";
import Footer from "../../Table/Footer";
import Pagination from "../../Pagination";
import { useTableContext } from "../../Table/useTableContext";

const PaginationFooter = (props) => {
  const {
    columns,
    fromRow,
    rowCount,
    currentPage,
    rowsCount,
      selected,
    paginationActions: { nextPage, prevPage, changeRowCount },
    components: { RowCounter },
  } = useTableContext();

  return (
    <Footer colSpan={columns.length + 1} {...props}>
      <RowCounter>
        {selected.length} row{selected.length > 1 && "s"} selected
      </RowCounter>
      <Pagination
        onNext={nextPage}
        onPrev={prevPage}
        fromRow={fromRow}
        rowCount={rowCount}
        rowsCount={rowsCount}
        changeRowCount={changeRowCount}
        currentPage={currentPage}
      />
    </Footer>
  );
};

export default PaginationFooter;
