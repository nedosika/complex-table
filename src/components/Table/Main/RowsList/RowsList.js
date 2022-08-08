import React from "react";
import {useTableContext} from "../../useTableContext";

const RowsList = () => {
  const {
    components: { Row, Cell },
    columns,
      rows,
    getRowId,
  } = useTableContext();

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
