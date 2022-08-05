import React from "react";
import CheckBox from "../../CheckBox";
import { useSelectionContext } from "./useSelectionContext";
import { useComplexTableContext } from "../useComplexTableContext";
import {usePaginationContext} from "../Pagination/usePaginationProvider";

const RowsList = () => {
  const {
    components: { Row, Cell },
    columns,
    getRowId,
    getRowHeight,
  } = useComplexTableContext();
  const { toggleSelected, getIsSelected, selectOne } = useSelectionContext();
  const { rows } = usePaginationContext();

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
      <Cell onClick={handleSelect(row)} style={{ cursor: "pointer" }}>
        <CheckBox isChecked={getIsSelected(row)} />
      </Cell>
      {columns.map(({ field }) => (
        <Cell colSpan={row.colspan && row.colspan[field]} key={field}>
          {row[field]}
        </Cell>
      ))}
    </Row>
  ));
};

export default RowsList;