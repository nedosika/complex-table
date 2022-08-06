import React from "react";
import CheckBox from "./CheckBox";
import { useTableContext } from "../../Table/useTableContext";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar, ColumnTitle, ColumnResizeIcon, CheckBox },
    columns,
    selectionActions: { toggleSelectedAll },
    selected,
  } = useTableContext();

  console.log(useTableContext());

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
