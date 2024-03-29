import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import Footer from "../../../Table/Footer";
import { SELECTION_CONFIG, useSelectionContext } from "./useSelectionContext";
import RowCounter from "../../../Table/Footer/RowCounter";

const SelectionFooter = (props) => {
  const {
    rows,
    columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,

  } = useTableContext();

  const { selected } = useSelectionContext();

  return (
    <Footer colSpan={columns.length + 1} {...props}>
      {checkboxSelection ? (
        <RowCounter>
          {selected.length} row{selected.length > 1 && "s"} selected
        </RowCounter>
      ) : (
        <RowCounter>
          {rows.length} row{rows.length > 1 && "s"}
        </RowCounter>
      )}
    </Footer>
  );
};

export default SelectionFooter;
