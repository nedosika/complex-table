import React from 'react';
import CheckBox from "../Selection/CheckBox";
import ColumnTitle from "../../Table/Main/Column/ColumnTitle";
import SortingButton from "./SortingButton";
import {SORT_DIRECTIONS} from "../../../helpers";
import ColumnResizeIcon from "../../Table/Main/Column/ColumnResizeIcon";
import {useTableContext} from "../../Table/useTableContext";

const ColumnsList = () => {
    const {
        components: { Column },
        columns,
        sort,
        sortingActions: { toggle },
        selected,
        selectionActions: { toggleSelectedAll },
    } = useTableContext();

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
                    <ColumnResizeIcon />
                </Column>
            ))}
        </tr>
    );
};

export default ColumnsList;