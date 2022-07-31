import React from "react";
import GridToolbar from "../Table/Toolbar";
import Button from "../Button";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

const Toolbar = () => {
  return (
    <GridToolbar>
      <Button
        title="Edit"
        icon={EditIcon}
        hint={({ selectedRows }) =>
          selectedRows.length === 1
            ? "Edit"
            : "Please select one row"
        }
        disabled={({ selectedRows }) => selectedRows.length !== 1}
      />
      <Button
        title="Delete"
        icon={DeleteIcon}
        hint={({ selectedRows }) =>
            selectedRows.length
                ? "Delete"
                : "Please select at least one rows"
        }
        disabled={({ selectedRows }) => !selectedRows.length}
      />
    </GridToolbar>
  );
};

export default Toolbar;
