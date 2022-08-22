import React from "react";
import { useTableContext } from "../../../Table/useTableContext";

const CellList = ({ row }) => {
  const {
    components: { Cell },
    columns,
  } = useTableContext();
  return columns.map(
    ({ field }) =>
      row[field] !== undefined && (
        <Cell colSpan={row.colspan && row.colspan[field]} key={field}>
          {row[field]}
        </Cell>
      )
  );
};

export default CellList;
