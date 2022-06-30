import React from "react";
import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";

const SortedWrapper = (Table) => ({componentsProps, ...props}) => {
    const {columns, rows, setRows} = props;

    const toggle = (field, isReverse) => {
        const newRows = [...rows].sort((a, b) => {
            if(a[field] < b[field]) { return -1; }
            if(a[field] > b[field]) { return 1; }
            return 0;
        })
        setRows(isReverse ? newRows.reverse() : newRows)
    }

    return <Table
        {...props}
        componentsProps={{
            ...componentsProps,
            Header: {
                ...componentsProps.Header,
                renderItem: ({field, headerName, width, sortable = true}) =>
                    <TableColumn width={width}>
                        <SortTitle content={headerName} sortable={sortable} toggle={(isReverse) => toggle(field, isReverse)}/>
                    </TableColumn>
            }
        }}
    />
}

export default SortedWrapper;