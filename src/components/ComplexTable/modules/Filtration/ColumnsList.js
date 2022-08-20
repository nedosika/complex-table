import { useTableContext } from "../../../Table/useTableContext";
import ColumnTitle from "../../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../../Table/Main/Column/ColumnResizeIcon";
import React from "react";
import ColumnMenuIcon from "./FiltrationMenu/MenuIcon";
import CheckBox from "../Selection/CheckBox";
import { SORT_DIRECTIONS } from "../../../../helpers";
import { useFiltrationContext } from "./Filtration";
import { useSortingContext } from "../Sorting/Sorting";
import { SORTING_CONFIG } from "../Sorting/useSorting";
import Button from "../Sorting/SortingButton/SortingButton";
import { useSelectionContext } from "../Selection/useSelectionContext";

const ColumnsList = () => {
  const {
    columns,
    components: { Column },
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
    <>
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
              style={{ cursor: sortable ? "pointer" : "auto" }}
            >
              <ColumnTitle text={headerName} onClick={() => sortable && toggle(field)}/>
              {sortable && (
                <Button
                  direction={
                    sort?.field === field
                      ? sort?.direction
                      : SORT_DIRECTIONS.NONE
                  }
                />
              )}
              <ColumnMenuIcon onClick={(event) => toggleMenu(event, field)} />
              <ColumnResizeIcon />
            </Column>
          )
        )}
      </tr>
    </>
  );
};

export default ColumnsList;
