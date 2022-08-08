import React from "react";

import ColumnMenu from "./ColumnMenu";
import ColumnMenuItem from "./ColumnMenuItem";
import useMenu from "../../components/Menu/useMenu";
import useFilter from "./useFilter";
import SelectionButton from "../../components/ComplexTable/Selection/SelectionButton";
import ColumnFilterIcon from "../Filtration/ColumnFilterIcon";

const ColumnMenuBuilder = (props) => {
  console.log("column menu");

  const {
    rows,
    columns,
    components: { Column, ColumnMenu, Table },
    disableColumnMenu,
  } = props;

  const { isOpen, anchorEl, toggleMenu } = useMenu();
  const {
    filtered,
    toggleFilter,
    updateActiveField,
    menuItems,
    applyFilter,
    clearFilter,
  } = useFilter(rows, columns);

  const handleToggleMenu = (event, field) => {
    toggleMenu(event);
    updateActiveField(field);
  };

  const ColumnWithMenu = (props) => {
    //console.log(props)
    const {
      children,
      column: { field },
    } = props;

    return (
      <Column {...props}>
        {children}
        <ColumnFilterIcon onClick={(event) => handleToggleMenu(event, field)} />
      </Column>
    );
  };

  const TableWithMenu = (props) => (
    <Table {...props}>
      {props.children}
      <ColumnMenu
        isOpen={isOpen}
        anchorEl={anchorEl}
        getKey={([key]) => key}
        items={menuItems}
        onClose={handleToggleMenu}
        onColumnClick={toggleFilter}
        renderItem={([item, isChecked]) => (
          <ColumnMenuItem isChecked={isChecked}>{item}</ColumnMenuItem>
        )}
      >
        <div>
          <SelectionButton onClick={applyFilter}>APPLY</SelectionButton>
          <SelectionButton onClick={clearFilter}>CLEAR</SelectionButton>
        </div>
      </ColumnMenu>
    </Table>
  );

  return {
    rows: filtered,
    components: {
      ...props.components,
      ColumnMenuIcon: ColumnFilterIcon,
      Column: disableColumnMenu ? Column : ColumnWithMenu,
      Table: TableWithMenu,
    },
  };
};

export default ColumnMenuBuilder;
