import React from "react";
import Pagination from "./Pagination";
import usePagination from "./usePagination";

const PaginationBuilder = (props) => {
  console.log("pagination");

  const {
    rows,
    components: { Footer },
  } = props;
  const { rowCount, nextPage, prevPage, fromRow, toRow } =
    usePagination(rows);

  const FooterWithPagination = (props) => (
    <Footer {...props}>
      {props.children}
      <Pagination
        onNext={nextPage}
        onPrev={prevPage}
        fromRow={fromRow}
        rowCount={rowCount}
      />
    </Footer>
  );

  return {
    rows: [...rows].splice(fromRow - 1, rowCount),
    components: {
      ...props.components,
      Footer: FooterWithPagination,
      Pagination,
    },
  };
};

export default PaginationBuilder;
