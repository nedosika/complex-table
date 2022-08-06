import React from "react";
import TableProvider, { useTableContext } from "../../Table/useTableContext";
import useSelection from "./useSelection";
import Header from "./Header";
import CheckBox from "./CheckBox";
import RowsList from "./RowsList";
import Footer from "./Footer";

const Selection = ({ children }) => {
  const { rows, getRowId, components } = useTableContext();

  return (
    <TableProvider
      value={{
        ...useTableContext(),
        ...useSelection({ rows, getRowId }),
        components: {
          ...components,
          Header,
          CheckBox,
          RowsList,
          Footer,
        },
      }}
    >
      {children}
    </TableProvider>
  );
};

export default Selection;
