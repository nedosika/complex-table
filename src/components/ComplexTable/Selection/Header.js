import React from "react";
import CheckBox from "../../CheckBox";
import { useTableProps } from "../useComplexTableContext";
import { useSelection } from "./SelectionProvider";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar },
    columns,
  } = useTableProps();
  const { selected, toggleSelectedAll } = useSelection();

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
          <Column key={field} >
              <ColumnTitle text={headerName} />
              <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </thead>
  );
};

export default SelectionHeader;
