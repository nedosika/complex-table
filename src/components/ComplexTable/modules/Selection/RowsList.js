import React from "react";
import { TABLE_CONFIG, useTableContext } from "../../../Table/useTableContext";
import { useSelectionContext } from "./useSelectionContext";
import SelectionCell from "./SelectionCell";

const RowsList = () => {
  const {
    components: { Row, Cell },
    rows,
    columns,
    [TABLE_CONFIG.getRowId]: getRowId,
    [TABLE_CONFIG.getRowHeight]: getRowHeight,
  } = useTableContext();
  const {
    selectionActions: { getIsSelected, selectOne },
  } = useSelectionContext();

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
      <SelectionCell row={row} />
      {columns.map(({ field }) => (
        <Cell colSpan={row.colspan && row.colspan[field]} key={field}>
          {row[field]}
        </Cell>
      ))}
    </Row>
  ));
};

export default RowsList;
