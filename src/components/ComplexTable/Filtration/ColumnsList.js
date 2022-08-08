import { useTableContext } from "../../Table/useTableContext";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import React from "react";
import useMenu from "../../Menu/useMenu";
import SortingButton from "../Sorting/SortingButton";
import ColumnMenu from "./ColumnMenu";
import ColumnMenuItem from "./ColumnMenuItem";
import ColumnMenuIcon from "./ColumnMenuIcon";
import CheckBox from "../Selection/CheckBox";
import { SORT_DIRECTIONS } from "../../../helpers";
import Button from "../../Button";

const ColumnsList = () => {
  const {
    sort,
    selected,
    columns,
    menuItems,
    components: { Column },
    filtrationActions: {
      applyFilter,
      clearFilter,
      toggleFilter,
      updateActiveField,
    },
    selectionActions: { toggleSelectedAll },
    sortingActions: { toggle },
  } = useTableContext();
  const { isOpen, anchorEl, toggleMenu } = useMenu();

  const handleToggleMenu = (event, field) => {
    toggleMenu(event);
    updateActiveField(field);
  };

  return (
      <tr>
        <Column
          style={{ width: 20, cursor: "pointer" }}
          onClick={toggleSelectedAll}
        >
          <CheckBox isChecked={selected.length} />
        </Column>
        {columns.map(({ headerName, field }) => (
          <Column
            key={field}
            onClick={toggle(field)}
            style={{ cursor: "pointer" }}
          >
            <ColumnTitle text={headerName} />
            <SortingButton
              direction={
                sort?.field === field ? sort?.direction : SORT_DIRECTIONS.NONE
              }
            />
            <ColumnMenuIcon
              onClick={(event) => handleToggleMenu(event, field)}
            />
            <ColumnResizeIcon />
          </Column>
        ))}
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
      </tr>
  );
};

export default ColumnsList;
