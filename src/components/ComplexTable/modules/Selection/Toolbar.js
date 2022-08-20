import React from "react";

import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import Toolbar from "../../../Table/Header/Toolbar";
import SelectionButton from "./SelectionButton";
import { useTableContext } from "../../../Table/useTableContext";

const SelectionToolbar = (props) => {
  const { columns } = useTableContext();
  return (
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
      />
    </Toolbar>
  );
};

export default SelectionToolbar;
