import React from "react";
import { useTableProps } from "../../Table/TableProvider";
import CheckBox from "../../CheckBox";
import { useSelection } from "./SelectionProvider";
import {useSearch} from "../Search/useSearchContext";

const RowsList = () => {
  const {
    components: { Row, Cell },
    columns,
    rows,
    getRowId,
    getRowHeight,
  } = useTableProps();
  const { toggleSelected, getIsSelected, selectOne } = useSelection();

  // const {searchedRows} = useTableSearch();

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
