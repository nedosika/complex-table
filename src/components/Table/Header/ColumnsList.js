import React from 'react';
import ColumnTitle from "../Main/Column/ColumnTitle";
import ColumnResizeIcon from "../Main/Column/ColumnResizeIcon";
import {useTableContext} from "../useTableContext";

const ColumnsList = () => {
    const {
        columns,
        components: { Column },
    } = useTableContext();
    return (
        <tr>
            {columns.map(({ headerName, field }) => (
                <Column headerName={headerName} key={field}>
                    <ColumnTitle text={headerName} />
                    <ColumnResizeIcon />
                </Column>
            ))}
        </tr>
    );
};

export default ColumnsList;