import React from "react";
import CheckBox from "../Selection/CheckBox";
import { TABLE_CONFIG, useTableContext } from "../../../Table/useTableContext";
import { useSortingContext } from "./useSortingContext";
import {
  SELECTION_CONFIG,
  useSelectionContext,
} from "../Selection/useSelectionContext";
import { SORTING_CONFIG } from "./useSorting";
import Button from "./SortingButton/SortingButton";
import { SORT_DIRECTIONS } from "../../../../helpers";

const ColumnsList = () => {
  const {
    components: { Column, ColumnResizeIcon, CheckBox, ColumnTitle },
    [TABLE_CONFIG.columns]: columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
  } = useTableContext();
  const {
    selectionActions: { toggleSelectedAll },
    selected,
  } = useSelectionContext();
  const {
    sortingActions: { toggle },
    sort,
  } = useSortingContext();

  return (
    <tr>
      {checkboxSelection && (
        <Column
          style={{ width: 20, cursor: "pointer" }}
          onClick={toggleSelectedAll}
        >
          <CheckBox isChecked={selected.length} />
          <ColumnResizeIcon />
        </Column>
      )}
      {columns.map(
        ({ headerName, field, [SORTING_CONFIG.sortable]: sortable }) => (
          <Column key={field} style={{ cursor: sortable ? "pointer" : "auto" }}>
            <ColumnTitle
              text={headerName}
              onClick={() => sortable && toggle(field)}
            />
            {sortable && (
              <Button
                direction={
                  sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
                }
              />
            )}
            <ColumnResizeIcon />
          </Column>
        )
      )}
    </tr>
  );
};

export default ColumnsList;
