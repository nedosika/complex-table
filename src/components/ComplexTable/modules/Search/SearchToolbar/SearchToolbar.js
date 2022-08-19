import React from "react";
import SelectionButton from "../../Selection/SelectionButton";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import SearchInput from "./SearchInput";
import Toolbar from "../../../../Table/Header/Toolbar";

const SearchToolbar = (props) => {
  return (
    <Toolbar {...props}>
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
      <SearchInput label="Search" placeholder="Please type to search..." />
    </Toolbar>
  );
};

export default SearchToolbar;
