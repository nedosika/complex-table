import React from "react";
import SelectionButton from "../../Selection/SelectionButton";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";
import SearchInput from "./SearchInput";
import Toolbar from "../../../../Table/Header/Toolbar";
import { SELECTION_CONFIG } from "../../Selection/Selection";
import { useTableContext } from "../../../../Table/useTableContext";

const SearchToolbar = (props) => {
  const { columns, [SELECTION_CONFIG.checkboxSelection]: checkboxSelection } =
    useTableContext();
  return (
    <Toolbar {...props} colspan={columns.length + 1}>
      {checkboxSelection && (
        <SelectionButton
          title="Edit"
          icon={EditIcon}
          hint={({ selected }) =>
            selected.length === 1 ? "Edit" : "Please select one row"
          }
          disabled={({ selected }) => selected.length !== 1}
        />
      )}
      {checkboxSelection && (
        <SelectionButton
          title="Delete"
          icon={DeleteIcon}
          hint={({ selected }) =>
            selected.length ? "Delete" : "Please select at least one rows"
          }
          disabled={({ selected }) => !selected.length}
        />
      )}
      <SearchInput label="Search" placeholder="Please type to search..." />
    </Toolbar>
  );
};

export default SearchToolbar;
