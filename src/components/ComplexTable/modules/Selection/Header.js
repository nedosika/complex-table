import React from "react";
import CheckBox from "./CheckBox";
import { useTableContext } from "../../useTableContext";
import { useSelectionContext } from "./Selection";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar, ColumnTitle, ColumnResizeIcon, CheckBox },
    columns,
  } = useTableContext();
  const {
    selected,
    selectionActions: { toggleSelectedAll },
  } = useSelectionContext();

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
          <Column key={field}>
            <ColumnTitle text={headerName} />
            <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </thead>
  );
};

export default SelectionHeader;
