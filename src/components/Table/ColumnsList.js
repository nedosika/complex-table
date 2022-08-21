import React from 'react';
import Column from "./Main/Column";
import ColumnTitle from "./Main/Column/ColumnTitle";
import ColumnResizeIcon from "./Main/Column/ColumnResizeIcon";
import {useTableContext} from "./useTableContext";

const ColumnsList = () => {
    const {columns} = useTableContext();
    return (
        <tr>
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