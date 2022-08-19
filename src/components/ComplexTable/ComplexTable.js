import React from 'react';
import Table from "../Table";
import ComplexTableProvider from "./useComplexTableContext";

const ComplexTable = ({children, ...props}) => {
    console.log(props)
    return (
        <ComplexTableProvider {...props}>
            <Table>
                {children}
            </Table>
        </ComplexTableProvider>
    );
};

export default ComplexTable;