import React from "react";

import { useTableContext } from "../../../Table/useTableContext";
import {
  SELECTION_CONFIG,
  useSelectionContext,
} from "../Selection/useSelectionContext";
import CheckBox from "../Selection/CheckBox";
import SelectionButton from "../Selection/SelectionButton";
import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";

const RowsList = () => {
  const {
    components: { Row, Cell },
    rows,
    columns,
    getRowId,
    getRowHeight,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
  } = useTableContext();
  const {
    selectionActions: { toggleSelected, getIsSelected, selectOne },
  } = useSelectionContext();

  const handleSelect = (row) => (event) => {
    event.stopPropagation();
    toggleSelected(row);
  };

  return rows.map((row) => (
    <Row
      row={row}
      key={getRowId(row)}
      style={{
        backgroundColor: getIsSelected(row) && "rgba(25, 118, 210, 0.08)",
        height: getRowHeight(row),
      }}
      onClick={() => selectOne(row)}
    >
      {checkboxSelection && (
        <Cell onClick={handleSelect(row)} style={{ cursor: "pointer" }}>
          <CheckBox isChecked={getIsSelected(row)} />
        </Cell>
      )}
      {columns.map(
        ({ field }) =>
          row[field] !== undefined && (
            <Cell colSpan={row.colspan && row.colspan[field]} key={field}>
              {row[field]}
            </Cell>
          )
      )}
      <Cell>
        <SelectionButton title="Edit" icon={EditIcon} hint={"Edit"} />
        <SelectionButton title="Delete" icon={DeleteIcon} hint={"Delete"} />
      </Cell>
    </Row>
  ));
};

export default RowsList;
