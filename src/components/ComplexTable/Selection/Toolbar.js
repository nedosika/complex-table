import React from "react";

import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import Toolbar from "../../Table/Header/Toolbar";
import Button from "../../Button";

const SelectionToolbar = (props) => {
  return (
    <Toolbar {...props}>
      <Button
        title="Edit"
        icon={EditIcon}
        hint={({ selected }) =>
          selected.length === 1 ? "Edit" : "Please select one row"
        }
        disabled={({ selectedRows }) => selectedRows.length !== 1}
      />
      <Button
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
