import React from "react";
import SelectionProvider from "./useSelectionContext";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import CheckBox from "./CheckBox";
import RowsList from "./RowsList";
import Footer from "./Footer";
import Toolbar from "./Toolbar";
import { useRootContext } from "../../../Table/useRootContext";

const Selection = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();

  return (
    <SelectionProvider>
      <TableProvider
        {...props}
        {...rootProps}
        components={{
          ...components,
          ColumnsList,
          CheckBox,
          RowsList,
          Footer,
          Toolbar,
          ...rootComponents,
        }}
      >
        {children}
      </TableProvider>
    </SelectionProvider>
  );
};

export default Selection;
