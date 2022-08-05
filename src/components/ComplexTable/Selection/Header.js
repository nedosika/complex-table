import React from "react";
import CheckBox from "../../CheckBox";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import {useComplexTableContext} from "../useComplexTableContext";
import {useSelectionContext} from "./useSelectionContext";

const SelectionHeader = () => {
  const {
    components: { Column, Toolbar },
    columns,
  } = useComplexTableContext();
  const { selected, toggleSelectedAll } = useSelectionContext();

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
