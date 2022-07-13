import React from "react";
import Pagination from "./Pagination";
import usePagination from "./usePagination";

const PaginationBuilder = (props) => {
  console.log("pagination");

  const {
    rows,
    columns,
    components: { Column, ColumnMenu, Footer },
  } = props;
  const { rowCount, nextPage, prevPage, currentPage, pagesCount } =
    usePagination(rows);

  const FooterWithPagination = (props) => (
    <Footer {...props}>
      {props.children}
      <Pagination
        rowCount={rowCount}
        pagesCount={pagesCount}
        currentPage={currentPage}
        onNext={nextPage}
        onPrev={prevPage}
      />
    </Footer>
  );

  return {
    components: {
      ...props.components,
      Footer: FooterWithPagination,
      Pagination,
    },
  };
};

export default PaginationBuilder;
