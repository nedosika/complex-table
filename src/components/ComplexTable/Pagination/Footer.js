import React from "react";
import { useComplexTableContext } from "../useComplexTableContext";
import Footer from "../../Table/Footer";
import Pagination from "../../Pagination";
import { usePaginationContext } from "./usePaginationProvider";
import {useSelectionContext} from "../Selection/useSelectionContext";

const PaginationFooter = (props) => {
  const {
    columns,
    components: { RowCounter },
  } = useComplexTableContext();
  const {
    nextPage,
    prevPage,
    fromRow,
    rowCount,
    changeRowCount,
    currentPage,
    rowsCount,
  } = usePaginationContext();
  const {selected} = useSelectionContext();

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
