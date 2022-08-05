import React from "react";


import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import Toolbar from "../../Table/Toolbar";
import Button from "../Button";

const SelectionToolbar = () => {
    return (
        <Toolbar>
            <Button
                title="Edit"
                icon={EditIcon}
                hint={({ selectedRows }) =>
                    selectedRows.length === 1 ? "Edit" : "Please select one row"
                }
                disabled={({ selectedRows }) => selectedRows.length !== 1}
            />
            <Button
                title="Delete"
                icon={DeleteIcon}
                hint={({ selectedRows }) =>
                    selectedRows.length ? "Delete" : "Please select at least one rows"
                }
                disabled={({ selectedRows }) => !selectedRows.length}
            />
        </Toolbar>
    );
};

export default SelectionToolbar;
