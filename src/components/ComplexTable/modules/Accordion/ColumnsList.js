import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import {
  SELECTION_CONFIG,
  useSelectionContext,
} from "../Selection/useSelectionContext";
import ColumnMenuIcon from "../Filtration/FiltrationMenu/MenuIcon";
import { useSortingContext } from "../Sorting/useSortingContext";
import { useFiltrationContext } from "../Filtration/useFiltrationContext";
import { SORTING_CONFIG } from "../Sorting/useSorting";
import ColumnTitle from "../../../Table/Main/Column/ColumnTitle";
import Button from "../Sorting/SortingButton/SortingButton";
import { SORT_DIRECTIONS } from "../../../../helpers";
import ColumnResizeIcon from "../../../Table/Main/Column/ColumnResizeIcon";
import { COLUMN_FIELDS, COLUMN_TYPES } from "../../useComplexTableContext";

const ColumnsList = () => {
  const {
    components: { Column, ColumnTitle, ColumnResizeIcon, CheckBox },
    columns,
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
  const {
    filtrationActions: { toggleMenu },
  } = useFiltrationContext();

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
      <Column />
      {columns.map(
        ({
          [COLUMN_FIELDS.headerName]: headerName,
          [COLUMN_FIELDS.field]: field,
          [COLUMN_FIELDS.type]: type,
          [COLUMN_FIELDS.sortable]: sortable,
        }) => (
          <Column key={field}>
            <ColumnTitle
              text={headerName}
              onClick={() => sortable && toggle(field)}
              style={{ cursor: sortable ? "pointer" : "auto" }}
            />
            {sortable && (
              <Button
                direction={
                  sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
                }
                onClick={() => sortable && toggle(field)}
              />
            )}
            {type !== COLUMN_TYPES.actions && (
              <ColumnMenuIcon onClick={(event) => toggleMenu(event, field)} />
            )}
            <ColumnResizeIcon />
          </Column>
        )
      )}
      {/*<Column>*/}
      {/*    <ColumnTitle text="Actions" />*/}
      {/*    <ColumnResizeIcon />*/}
      {/*</Column>*/}
    </tr>
  );
};

export default ColumnsList;
