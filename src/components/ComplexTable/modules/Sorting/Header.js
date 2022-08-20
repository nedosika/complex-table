import React from "react";
import CheckBox from "../Selection/CheckBox";
import ColumnTitle from "../../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../../Table/Main/Column/ColumnResizeIcon";
import { SORT_DIRECTIONS } from "../../../../helpers";
import Button from "./SortingButton";
import Column from "../../../Table/Main/Column";
import { useTableContext } from "../../useTableContext";
import { useSortingContext } from "./Sorting";
import { SORTING_CONFIG } from "./useSorting";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar },
    columns,
    selected,
    selectionActions: { toggleSelectedAll },
  } = useTableContext();
  const {
    sortingActions: { toggle },
    sort,
  } = useSortingContext();

  return (
    <thead>
      <tr>
        <th colSpan={columns.length}>
          <Toolbar />
        </th>
      </tr>
      <tr>
        <Column
          style={{ width: 20, cursor: "pointer" }}
          onClick={toggleSelectedAll}
        >
          <CheckBox isChecked={selected.length} />
        </Column>
        {columns.map(
          ({ headerName, field, [SORTING_CONFIG.sortable]: sortable }) => (
            <Column
              key={field}
              onClick={toggle(field)}
              style={sortable && { cursor: "pointer" }}
            >
              <ColumnTitle text={headerName} />
              {sortable && (
                <Button
                  direction={
                    sort?.field === field
                      ? sort?.direction
                      : SORT_DIRECTIONS.NONE
                  }
                />
              )}
              <ColumnResizeIcon />
            </Column>
          )
        )}
      </tr>
    </thead>
  );
};

export default SelectionHeader;
