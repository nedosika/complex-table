import React from "react";
import { SELECTION_CONFIG } from "../Selection/useSelectionContext";
import { useTableContext } from "../../../Table/useTableContext";

const AccordionMoreRowsList = ({ isShow, row }) => {
  const {
    components: { Row, Cell },
    getRowId,
    columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
  } = useTableContext();
  return (
    isShow &&
    row.accordion.map((row) => (
      <Row key={getRowId(row)}>
        {checkboxSelection && <Cell />}
        <Cell />
        {columns.map(({ field }) => (
          <Cell key={field}>{row[field]}</Cell>
        ))}
      </Row>
    ))
  );
};

export default AccordionMoreRowsList;
