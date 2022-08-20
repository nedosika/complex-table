import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import RowsList from "./RowsList";
import { useRootContext } from "../../../Table/useRootContext";

const RowsActions = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents } =
    useRootContext();
  const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();

  return (
    <TableProvider
      {...props}
      components={{ ...components, ColumnsList, RowsList, ...rootComponents }}
    >
      {children}
    </TableProvider>
  );
};

export default RowsActions;
