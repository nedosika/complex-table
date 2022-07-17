import React from "react";

import ColumnMenu from "./ColumnMenu";
import ColumnMenuItem from "./ColumnMenuItem";
import useMenu from "../../components/ModalMenu/useMenu";
import useFilter from "./useFilter";
import Button from "../../components/Button";
import ColumnFilterIcon from "../Filtration/ColumnFilterIcon";

const ColumnMenuBuilder = (props) => {
  console.log("column menu");

  const {
    rowsToShow: rows,
    columnsToShow: columns,
    components: { Column, ColumnMenu, Header },
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

  const HeaderWithMenu = (props) => (
    <Header {...props}>
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
          <Button onClick={applyFilter}>APPLY</Button>
          <Button onClick={clearFilter}>CLEAR</Button>
        </div>
      </ColumnMenu>
    </Header>
  );

  return {
    rowsToShow: filtered,
    components: {
      ...props.components,
      ColumnMenuIcon: ColumnFilterIcon,
      Column: disableColumnMenu ? Column : ColumnWithMenu,
      Header: HeaderWithMenu,
    },
  };
};

export default ColumnMenuBuilder;