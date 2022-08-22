import React from "react";
import { useTableContext } from "../../../Table/useTableContext";
import { COLUMN_FIELDS, COLUMN_TYPES } from "../../useComplexTableContext";

const CellList = ({ row }) => {
  const {
    components: { Cell },
    columns,
    getRowId,
  } = useTableContext();

  return columns.map(
    ({
      [COLUMN_FIELDS.field]: field,
      [COLUMN_FIELDS.type]: type,
      [COLUMN_FIELDS.getActions]: getActions,
    }) => {
      if (type === COLUMN_TYPES.actions)
        return <Cell key={field}>{getActions(getRowId(row))}</Cell>;
      if (row[field] === undefined) return;

      return (
        <Cell colSpan={row.colspan && row.colspan[field]} key={field}>
          {row[field]}
        </Cell>
      );
    }
  );
};

export default CellList;
