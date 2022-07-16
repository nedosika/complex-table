import React, {useEffect, useState} from "react";
import { useTableProps } from "../../contexts/ComplexTable/ComplexTable";
import Toolbar from "../Table/Toolbar";
import Button from "../Button";
import ModalMenu from "../ModalMenu";
import useMenu from "../ModalMenu/useMenu";
import ColumnMenuItem from "../../modules/ColumnMenuBuilder/ColumnMenuItem";

const GridToolbar = ({ columns, setColumns }) => {
  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const [columnFilter, setColumnFilter] = useState(
    Object.assign(
      {},
        ...columns.map((column) => ({
        [column.field]: true,
      }))
    )
  );

  const handleColumnClick = (item, event) => {
    setColumnFilter((prevState) => ({
      ...prevState,
      [item.field]: !prevState[item.field],
    }));
  };

  useEffect(() => {
      setColumns(columns.filter((column) => columnFilter[column.field]));
  }, [columnFilter])

  return (
    <Toolbar>
      <Button onClick={toggleMenu}>Columns</Button>
      <Button>Density</Button>
      <ModalMenu
        anchorEl={anchorEl}
        isOpen={isOpen}
        items={columns}
        renderItem={(item) => (
          <ColumnMenuItem isChecked={columnFilter[item.field]}>{item.headerName}</ColumnMenuItem>
        )}
        onColumnClick={handleColumnClick}
        onClose={toggleMenu}
      />
    </Toolbar>
  );
};

export default GridToolbar;
