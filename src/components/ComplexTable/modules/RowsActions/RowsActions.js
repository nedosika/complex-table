import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import RowsList from "./RowsList";
import { useRootContext } from "../../../Table/useRootContext";
import Footer from "./Footer";

const RowsActions = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents } = useRootContext();
  const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();

  return (
    <TableProvider
      {...props}
      components={{
        ...components,
        ColumnsList,
        RowsList,
        Footer,
        ...rootComponents,
      }}
    >
      {children}
    </TableProvider>
  );
};

export default RowsActions;
