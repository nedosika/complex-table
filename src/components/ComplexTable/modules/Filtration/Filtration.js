import React from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "../../../Table/useTableContext";
import ColumnsList from "./ColumnsList";
import FiltrationProvider from "./useFiltrationContext";
import FiltrationMenu from "./FiltrationMenu/FiltrationMenu";
import useFilter from "./useFilter";
import { useRootContext } from "../../../Table/useRootContext";

const Filtration = ({ children }) => {
  const { [TABLE_CONFIG.components]: rootComponents, ...rootProps } =
    useRootContext();
  const {
    [TABLE_CONFIG.components]: components,
    [TABLE_CONFIG.rows]: rows,
    [TABLE_CONFIG.columns]: columns,
    ...props
  } = useTableContext();

  const { rows: filteredRows, ...filtration } = useFilter({ rows, columns });

  return (
    <FiltrationProvider {...filtration}>
      <TableProvider
        {...props}
        {...rootProps}
        rows={filteredRows}
        components={{
          ...components,
          ColumnsList,
          ...rootComponents,
        }}
      >
        {children}
        <FiltrationMenu />
      </TableProvider>
    </FiltrationProvider>
  );
};

export default Filtration;
