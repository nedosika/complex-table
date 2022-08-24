import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import Footer from "../../../Table/Footer";
import RowCounter from "../../../Table/Footer/RowCounter";
import {SELECTION_CONFIG, useSelectionContext} from "../Selection/useSelectionContext";

const ActionsRowsFooter = (props) => {
  const {
    rows,
    columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,

  } = useTableContext();

  const { selected } = useSelectionContext();

  return (
    <Footer colSpan={columns.length + 2} {...props}>
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

export default ActionsRowsFooter;
