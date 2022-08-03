import React from "react";
import Pagination from "../../components/Pagination";
import usePagination from "../../components/Pagination/usePagination";

const PaginationBuilder = (props) => {
  console.log("pagination");

  const {
    showedRows,
    columns,
    components: { Footer, RowCounter },
  } = props;
  const { rowCount, nextPage, prevPage, fromRow, changeRowCount } =
    usePagination(showedRows);

  const FooterWithPagination = (props) => (
    <Footer {...props}>
      {props.children}
      <Pagination
        onNext={nextPage}
        onPrev={prevPage}
        fromRow={fromRow}
        rowCount={rowCount}
        rowsCount={showedRows.length}
        changeRowCount={changeRowCount}
      />
    </Footer>
  );

  return {
    showedRows: [...showedRows].splice(fromRow - 1, rowCount),
    components: {
      ...props.components,
      Footer: FooterWithPagination,
    },
  };
};

export default PaginationBuilder;
