import React, {
  Fragment,
  useCallback,
  useRef,
  useState,
} from "react";

import {
  TABLE_COMPONENTS,
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import { useSelectionContext } from "../Selection/useSelectionContext";
import AccordionCell from "./AccordionCell";
import SelectionCell from "../Selection/SelectionCell";
import CellList from "../RowsActions/CellList";
import AccordionMoreRowsList from "./AccordionMoreRowsList";

const RowsList = () => {
  const {loading: isLoading, ...tableProps} = useTableContext();
  const {
    selectionActions: { getIsSelected, selectOne },
  } = useSelectionContext();

  const { [TABLE_COMPONENTS.Row]: Row } = tableProps[TABLE_CONFIG.components];

  const [isMore, setIsMore] = useState(false);
  const handleToggleAccordion = (event) => {
    event.stopPropagation();
    setIsMore((isMore) => !isMore);
  };

  return tableProps[TABLE_CONFIG.rows].map((row) => (
    <Fragment key={tableProps[TABLE_CONFIG.getRowId](row)}>
      <Row
        row={row}
        style={{
          backgroundColor: getIsSelected(row) && "rgba(25, 118, 210, 0.08)",
          height: tableProps[TABLE_CONFIG.getRowHeight](row),
        }}
        onClick={() => selectOne(row)}
      >
        <SelectionCell row={row} />
        <AccordionCell
          isShow={row.accordion}
          isMore={isMore}
          toggle={handleToggleAccordion}
        />
        <CellList row={row} />
      </Row>
      <AccordionMoreRowsList isShow={isMore && row.accordion} row={row} />
    </Fragment>
  ));
};

export default RowsList;
