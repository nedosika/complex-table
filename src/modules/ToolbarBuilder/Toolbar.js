import React, { useState } from "react";
import SelectionButton from "../../components/ComplexTable/Selection/SelectionButton";
import ModalMenu from "../../components/ModalMenu";
import ColumnMenuItem from "../ColumnMenuBuilder/ColumnMenuItem";
import useMenu from "../../components/ModalMenu/useMenu";

const Toolbar = (props) => {
  console.log("toolbar");
  const {
    columns,
    components: { Toolbar },
  } = props;
  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const [columnFilter, setColumnFilter] = useState(
    Object.assign({}, ...columns.map((column) => ({ [column.field]: true })))
  );

  const handleColumnClick = (item, event) => {
    event.stopPropagation();
    setColumnFilter((prevState) => ({
      ...prevState,
      [item.field]: !columnFilter[item.field],
    }));
  };

  const GridToolbar = () => {
    return (
      <Toolbar>
        <SelectionButton onClick={toggleMenu}>Columns</SelectionButton>
        <SelectionButton>Density</SelectionButton>
        <ModalMenu
          anchorEl={anchorEl}
          isOpen={isOpen}
          items={columns}
          renderItem={(item) => (
            <ColumnMenuItem
              isChecked={columnFilter[item.field]}
              id={item.field}
            >
              {item.headerName}
            </ColumnMenuItem>
          )}
          getKey={(item) => item.field}
          onColumnClick={handleColumnClick}
          onClose={toggleMenu}
        />
      </Toolbar>
    );
  };

  return {
    columns: columns.filter((column) => columnFilter[column.field]),
    components: {
      ...props.components,
      Toolbar: GridToolbar,
    },
  };
};

export default Toolbar;
