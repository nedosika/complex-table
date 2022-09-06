import TableProvider, {TABLE_CONFIG, useTableContext} from "../../../Table/useTableContext";
import {useRootContext} from "../../../Table/useRootContext";
import React from "react";
import RowsList from "./RowsList";
import Footer from "./Footer";

const InfiniteScroll = ({ children }) => {
    const { [TABLE_CONFIG.components]: rootComponents } = useRootContext();
    const { [TABLE_CONFIG.components]: components, ...props } = useTableContext();
    return (
        <TableProvider
            {...props}
            components={{ ...components, RowsList, Footer, ...rootComponents }}
        >
            {children}
        </TableProvider>
    );
};

export default InfiniteScroll;