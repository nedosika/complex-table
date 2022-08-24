import React, { Fragment, useCallback, useRef, useState } from "react";

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
  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("inter");
        //setPageNum((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return rows.map((row, index) => (
    <Fragment key={getRowId(row)}>
      <Row
        ref={rows.length === index + 1 ? lastElementRef : undefined}
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
      <AccordionMoreRowsList isShow={isMore && row.accordion} row={row} />
    </Fragment>
  ));
};

export default RowsList;
