import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import { useSelectionContext } from "./Selection";

const ColumnsList = () => {
  const {
    components: { Column, ColumnTitle, ColumnResizeIcon, CheckBox },
    columns,
  } = useTableContext();
  const {
    selectionActions: { toggleSelectedAll },
    selected,
  } = useSelectionContext();

  return (
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
  );
};

export default ColumnsList;
