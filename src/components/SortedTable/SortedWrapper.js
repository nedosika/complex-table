import React from "react";
import SortTitle from "./SortTitle";
import TableColumn from "../Table/Main/Column";

const SortedWrapper = (Table) => ({toggle, componentsProps, ...props}) => {

    return <Table
        {...props}
        componentsProps={{
            ...componentsProps,
            Header: {
                ...componentsProps.Header,
                renderItem: ({headerName, width, sortable = true}) =>
                    <TableColumn width={width}>
                        <SortTitle content={headerName} sortable={sortable}/>
                    </TableColumn>
            }
        }}
    />
}

export default SortedWrapper;