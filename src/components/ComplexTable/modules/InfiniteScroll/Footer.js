import React from "react";
import { TABLE_CONFIG, useTableContext } from "../../../Table/useTableContext";
import Footer from "../../../Table/Footer";
import RowCounter from "../../../Table/Footer/RowCounter";
import {
  SELECTION_CONFIG,
  useSelectionContext,
} from "../Selection/useSelectionContext";
import { CircularProgress, LinearProgress } from "@mui/material";

const ActionsRowsFooter = (props) => {
  const {
    rows,
    columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
    [TABLE_CONFIG.loading]: isLoading,
  } = useTableContext();

  const { selected } = useSelectionContext();

  const content = checkboxSelection
    ? `${selected.length} row${selected.length > 1 ? "s" : ""} selected`
    : `${rows.length} row${rows.length > 1 && "s"}`;

  return (
    <Footer colSpan={columns.length + 2} {...props}>
      <RowCounter>
        {isLoading && (
          <CircularProgress size={20} sx={{ marginRight: "10px" }} />
        )}
        {content}
      </RowCounter>
    </Footer>
  );
};

export default ActionsRowsFooter;
