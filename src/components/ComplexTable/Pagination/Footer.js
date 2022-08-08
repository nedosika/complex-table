import React from "react";
import Footer from "../../Table/Footer";
import Pagination from "../../Pagination";
import { useTableContext } from "../../Table/useTableContext";

const PaginationFooter = (props) => {
  const {
    columns,
    selected,
    components: { RowCounter },
  } = useTableContext();

  return (
    <Footer colSpan={columns.length + 1} {...props}>
      <RowCounter>
        {selected.length} row{selected.length > 1 && "s"} selected
      </RowCounter>
      <Pagination/>
    </Footer>
  );
};

export default PaginationFooter;
