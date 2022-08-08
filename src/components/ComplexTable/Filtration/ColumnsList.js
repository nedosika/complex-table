import { useTableContext } from "../../Table/useTableContext";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import React, { useState } from "react";
import SortingButton from "../Sorting/SortingButton";
import ColumnMenuIcon from "./ColumnMenuIcon";
import CheckBox from "../Selection/CheckBox";
import { SORT_DIRECTIONS } from "../../../helpers";
import {useFiltrationContext} from "./Filtration";

const ColumnsList = () => {
  const {
    sort,
    selected,
    columns,
    components: { Column },
    selectionActions: { toggleSelectedAll },
    sortingActions: { toggle },
  } = useTableContext();

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
        {columns.map(({ headerName, field }) => (
          <Column
            key={field}
            onClick={toggle(field)}
            style={{ cursor: "pointer" }}
          >
            <ColumnTitle text={headerName} />
            <SortingButton
              direction={
                sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
              }
            />
            <ColumnMenuIcon onClick={(event) => toggleMenu(event, field)} />
            <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </>
  );
};

export default ColumnsList;
