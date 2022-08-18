import React from "react";
import { useTableContext } from "../../Table/useTableContext";
import { useSelectionContext } from "../Selection/Selection";
import ColumnMenuIcon from "../Filtration/ColumnMenuIcon";
import { useSortingContext } from "../Sorting/Sorting";
import { useFiltrationContext } from "../Filtration/Filtration";
import { SORTING_CONFIG } from "../Sorting/useSorting";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import Button from "../Sorting/SortingButton/SortingButton";
import { SORT_DIRECTIONS } from "../../../helpers";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";

const ColumnsList = () => {
  const {
    components: { Column, ColumnTitle, ColumnResizeIcon, CheckBox },
    columns,
  } = useTableContext();
  const {
    selectionActions: { toggleSelectedAll },
    selected,
  } = useSelectionContext();
  const {
    sortingActions: { toggle },
    sort,
  } = useSortingContext();
  const {
    filtrationActions: { toggleMenu },
  } = useFiltrationContext();

  return (
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
            onClick={() => sortable && toggle(field)}
            style={{ cursor: sortable ? "pointer" : "auto" }}
          >
            <ColumnTitle text={headerName} />
            {sortable && (
              <Button
                direction={
                  sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
                }
              />
            )}
            <ColumnMenuIcon onClick={(event) => toggleMenu(event, field)} />
            <ColumnResizeIcon />
          </Column>
        )
      )}
      <Column>
        <ColumnTitle text="Actions" />
        <ColumnResizeIcon />
      </Column>
    </tr>
  );
};

export default ColumnsList;
