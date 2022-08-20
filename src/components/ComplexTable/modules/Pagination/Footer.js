import React from "react";
import Footer from "../../../Table/Footer";
import Pagination from "../../../Pagination";
import { useTableContext } from "../../useTableContext";
import {useSelectionContext} from "../Selection/Selection";

const PaginationFooter = (props) => {
  const {
    columns,
    components: { RowCounter },
  } = useTableContext();
    const {
        selected,
    } = useSelectionContext();

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
