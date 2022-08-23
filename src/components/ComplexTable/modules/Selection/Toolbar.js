import React from "react";

import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import Toolbar from "../../../Table/Header/Toolbar";
import SelectionButton from "./SelectionButton";
import { useTableContext } from "../../../Table/useTableContext";
import { SELECTION_CONFIG, useSelectionContext } from "./useSelectionContext";

const SelectionToolbar = (props) => {
  const {
    columns,
    [SELECTION_CONFIG.checkboxSelection]: checkboxSelection,
    onDeleteRows,
  } = useTableContext();
  const {
    selected,
    selectionActions: { toggleSelectedAll },
  } = useSelectionContext();
  const handleDelete = () => {
    onDeleteRows(selected);
    toggleSelectedAll();
  };

  return (
    checkboxSelection && (
      <Toolbar {...props} colspan={columns.length + 1}>
        <SelectionButton
          title="Edit"
          icon={EditIcon}
          hint={({ selected }) =>
            selected.length === 1 ? "Edit" : "Please select one row"
          }
          disabled={({ selected }) => selected.length !== 1}
        />
        <SelectionButton
          title="Delete"
          icon={DeleteIcon}
          hint={({ selected }) =>
            selected.length ? "Delete" : "Please select at least one rows"
          }
          disabled={({ selected }) => !selected.length}
          onClick={handleDelete}
        />
      </Toolbar>
    )
  );
};

export default SelectionToolbar;
