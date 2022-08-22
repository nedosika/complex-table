import React, {Fragment, useState} from "react";

import { useTableContext } from "../../../Table/useTableContext";
import { useSelectionContext } from "../Selection/useSelectionContext";
import AccordionCell from "./AccordionCell";
import SelectionCell from "../Selection/SelectionCell";
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
    <Fragment key={getRowId(row)}>
      <Row
        row={row}
        style={{
          backgroundColor: getIsSelected(row) && "rgba(25, 118, 210, 0.08)",
          height: getRowHeight(row),
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
      <AccordionMoreRowsList
        isShow={isMore && row.accordion}
        row={row}
      />
    </Fragment>
  ));
};

export default RowsList;
