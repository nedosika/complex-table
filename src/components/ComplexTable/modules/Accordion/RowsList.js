import React, { useState } from "react";

import { useTableContext } from "../../../Table/useTableContext";
import { useSelectionContext } from "../Selection/useSelectionContext";
import AccordionCell from "./AccordionCell";
import SelectionCell from "../Selection/SelectionCell";
import RowsActionsCell from "../RowsActions/RowsActionsCell";
import CellList from "../RowsActions/CellList";
import AccordionMoreRowsList from "./AccordionMoreRowsList";

const RowsList = () => {
  const {
    components: { Row },
    rows,
    getRowId,
    getRowHeight,
  } = useTableContext();
  const {
    selectionActions: { getIsSelected, selectOne },
  } = useSelectionContext();

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
        <SelectionCell row={row} key="selectionCell" />
        <AccordionCell
          isShow={row.accordion}
          isMore={isMore}
          toggle={handleToggleAccordion}
          key="accordionCell"
        />
        <CellList row={row} />
        <RowsActionsCell key="rowsActionsCell" />
      </Row>
      <AccordionMoreRowsList
        isShow={isMore && row.accordion}
        row={row}
        key="accordion"
      />
    </>
  ));
};

export default RowsList;
