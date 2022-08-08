import React from "react";
import CheckBox from "../Selection/CheckBox";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import { SORT_DIRECTIONS } from "../../../helpers";
import Button from "../../../modules/Sorting/Button";
import Column from "../../Table/Main/Column";
import { useTableContext } from "../../Table/useTableContext";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar },
    columns,
    sort,
    sortingActions: { toggle },
    selected,
    selectionActions: { toggleSelectedAll },
  } = useTableContext();

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
        {columns.map(({ headerName, field }) => (
          <Column
            key={field}
            onClick={toggle(field)}
            style={{ cursor: "pointer" }}
          >
            <ColumnTitle text={headerName} />
            <Button
              direction={
                sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
              }
            />
            <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </thead>
  );
};

export default SelectionHeader;
