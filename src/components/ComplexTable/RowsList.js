import React from "react";

import Row from "../Table/Main/Row";
import Cell from "../Table/Main/Cell";
import { useTableContext } from "./useTableContext";

const defaultComponents = {
  Row,
  Cell,
};

const defaultProps = {

};

const RowsList = ({getRowId}) => {
  const { components, ...props } = useTableContext();
  const { Row, Cell } = Object.assign(defaultComponents, components);
  const { rows, columns } = Object.assign(defaultProps, props);

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
