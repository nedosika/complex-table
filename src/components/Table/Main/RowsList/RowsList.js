import React from "react";
import { useTableProps } from "../../TableProvider";

const RowsList = () => {
  const {
    components: { Row, Cell },
    columns,
    rows,
    getRowId,
  } = useTableProps();

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