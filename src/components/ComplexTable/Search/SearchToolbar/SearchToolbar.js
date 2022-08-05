import React from "react";
import Toolbar from "../../../Table/Toolbar";
import Button from "../../../Button";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import SearchInput from "./SearchInput";

const SearchToolbar = () => {
  return (
    <Toolbar>
      <Button
        title="Edit"
        icon={EditIcon}
        hint={({ selected }) =>
            selected.length === 1 ? "Edit" : "Please select one row"
        }
        disabled={({ selected }) => selected.length !== 1}
      />
      <Button
        title="Delete"
        icon={DeleteIcon}
        hint={({ selected }) =>
            selected.length ? "Delete" : "Please select at least one rows"
        }
        disabled={({ selected }) => !selected.length}
      />
      <SearchInput label="Search" placeholder="Please type to search..."/>
    </Toolbar>
  );
};

export default SearchToolbar;
