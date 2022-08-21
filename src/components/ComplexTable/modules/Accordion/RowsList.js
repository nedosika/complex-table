import React, { useState } from "react";

import { useTableContext } from "../../../Table/useTableContext";
import {
  SELECTION_CONFIG,
  useSelectionContext,
} from "../Selection/useSelectionContext";
import CheckBox from "../Selection/CheckBox";
import SelectionButton from "../Selection/SelectionButton";
import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import Icon from "../../../Icon";
import { ICON_TYPE_NAMES } from "../../../Icon/Icon";
import Row from "../../../Table/Main/Row";
import Cell from "../../../Table/Main/Cell";

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
  const [isMore, setIsMore] = useState(false);
  const handleToggleAccordion = (event) => {
    event.stopPropagation();
    setIsMore((isMore) => !isMore);
  };

  return rows.map((row) => (
    <>
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
        <Cell
          style={{ cursor: "pointer" }}
          onClick={handleToggleAccordion}
        >
          {row.accordion &&
            (isMore ? (
              <Icon type={[ICON_TYPE_NAMES.expandLess]} />
            ) : (
              <Icon type={[ICON_TYPE_NAMES.expandMore]} />
            ))}
        </Cell>
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
      {isMore && row.accordion &&
        row.accordion.map((row) => (
          <Row>
            {checkboxSelection && <Cell />}
            <Cell />
            {columns.map(({ field }) => (
              <Cell key={field}>{row[field]}</Cell>
            ))}
            <Cell />
          </Row>
        ))}
    </>
  ));
};

export default RowsList;
