import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import { SELECTION_CONFIG, useSelectionContext } from "./Selection";

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
