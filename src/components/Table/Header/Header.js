import React from "react";
import { useComplexTableContext } from "../../ComplexTable/useComplexTableContext";
import ColumnTitle from "../Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Main/Column/ColumnResizeIcon";

const Header = () => {
  const {
    columns,
    components: { Toolbar, Column },
  } = useComplexTableContext();

  return (
    <thead>
      <tr>
        <th colSpan={columns.length}>
          <Toolbar />
        </th>
      </tr>
      <tr>
        {columns.map(({ headerName, field }) => (
          <Column headerName={headerName} key={field}>
            <ColumnTitle text={headerName} />
            <ColumnResizeIcon />
          </Column>
        ))}
      </tr>
    </thead>
  );
};

export default Header;
