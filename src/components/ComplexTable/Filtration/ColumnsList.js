import { useTableContext } from "../../Table/useTableContext";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import React from "react";
import ColumnMenuIcon from "./ColumnMenuIcon";
import CheckBox from "../Selection/CheckBox";
import { SORT_DIRECTIONS } from "../../../helpers";
import {useFiltrationContext} from "./Filtration";
import {useSortingContext} from "../Sorting/Sorting";
import {SORTING_CONFIG} from "../Sorting/useSorting";
import Button from "../Sorting/SortingButton/SortingButton";

const ColumnsList = () => {
  const {
    selected,
    columns,
    components: { Column },
    selectionActions: { toggleSelectedAll },
  } = useTableContext();
  const {sortingActions: { toggle }, sort} = useSortingContext();
  const {
    filtrationActions: {
      toggleMenu,
    },
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
        {columns.map(({ headerName, field, [SORTING_CONFIG.sortable]: sortable }) => (
          <Column
            key={field}
            onClick={() => sortable && toggle(field)}
            style={{ cursor: sortable ? "pointer" : "auto" }}
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
            <ColumnMenuIcon onClick={(event) => toggleMenu(event, field)} />
            <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </>
  );
};

export default ColumnsList;
