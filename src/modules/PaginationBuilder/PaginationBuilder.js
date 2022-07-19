import React from "react";
import Pagination from "../../components/Pagination";
import usePagination from "../../components/Pagination/usePagination";

const PaginationBuilder = (props) => {
  console.log("pagination");

  const {
    rowsToShow: rows,
    components: { Footer },
  } = props;
  const { rowCount, nextPage, prevPage, fromRow, changeRowCount } =
    usePagination(rows);

  const FooterWithPagination = (props) => (
    <Footer {...props}>
      {props.children}
      <Pagination
        onNext={nextPage}
        onPrev={prevPage}
        fromRow={fromRow}
        rowCount={rowCount}
        rowsCount={rows.length}
        changeRowCount={changeRowCount}
      />
    </Footer>
  );

  return {
    rowsToShow: [...rows].splice(fromRow - 1, rowCount),
    components: {
      ...props.components,
      Footer: FooterWithPagination,
      Pagination,
    },
  };
};

export default PaginationBuilder;
