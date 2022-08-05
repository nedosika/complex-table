import React from "react";
import { useComplexTableContext } from "../../../ComplexTable/useComplexTableContext";
import { usePaginationContext } from "../../../ComplexTable/Pagination/usePaginationProvider";

const RowsList = () => {
  const {
    components: { Row, Cell },
    columns,
    getRowId,
  } = useComplexTableContext();
  const { rows } = usePaginationContext();

  return rows.map((row) => (
    <Row row={row} key={getRowId(row)}>
      {columns.map(({ field }) => (
        <Cell colspan={row.colspan && row.colspan[field]} key={field}>
          {row[field]}
        </Cell>
      ))}
    </Row>
  ));
};

export default RowsList;
