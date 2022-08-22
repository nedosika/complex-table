import React from 'react';
import SelectionButton from "../Selection/SelectionButton";
import EditIcon from "../Search/SearchToolbar/EditIcon";
import DeleteIcon from "../Search/SearchToolbar/DeleteIcon";
import {useTableContext} from "../../../Table/useTableContext";

const RowsActionsCell = () => {
    const {
        components: { Cell },
    } = useTableContext();
    return (
        <Cell>
            <SelectionButton title="Edit" icon={EditIcon} hint={"Edit"} />
            <SelectionButton title="Delete" icon={DeleteIcon} hint={"Delete"} />
        </Cell>
    );
};

export default RowsActionsCell;