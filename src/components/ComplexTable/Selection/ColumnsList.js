import React from 'react';
import {useTableContext} from "../../Table/useTableContext";

const ColumnsList = () => {
    const {
        components: { Column, ColumnTitle, ColumnResizeIcon, CheckBox },
        columns,
        selectionActions: { toggleSelectedAll },
        selected,
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
                <Column key={field}>
                    <ColumnTitle text={headerName} />
                    <ColumnResizeIcon />
                </Column>
            ))}
        </tr>
    );
};

export default ColumnsList;