import React from "react";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import useSelection from "./useSelection";
import ColumnsList from "./ColumnsList";
import CheckBox from "./CheckBox";
import RowsList from "./RowsList";
import Footer from "./Footer";
import Toolbar from "./Toolbar";

const Selection = ({ children }) => {
  const { rows, getRowId, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...useSelection({ rows, getRowId }),
        components: {
          ...components,
          ColumnsList,
          CheckBox,
          RowsList,
          Footer,
            Toolbar
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Selection;
