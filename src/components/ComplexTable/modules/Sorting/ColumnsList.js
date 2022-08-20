import React from 'react';
import CheckBox from "../Selection/CheckBox";
import ColumnTitle from "../../../Table/Main/Column/ColumnTitle";
import SortingButton from "./SortingButton";
import {SORT_DIRECTIONS} from "../../../../helpers";
import ColumnResizeIcon from "../../../Table/Main/Column/ColumnResizeIcon";
import {useTableContext} from "../../useTableContext";
import {useSortingContext} from "./Sorting";

const ColumnsList = () => {
    const {
        components: { Column },
        columns,
        selected,
        selectionActions: { toggleSelectedAll },
    } = useTableContext();
    const {sortingActions: { toggle }, sort} = useSortingContext();

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
                    style={{ cursor: "pointer" }}
                >
                    <ColumnTitle text={headerName} onClick={toggle(field)}/>
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