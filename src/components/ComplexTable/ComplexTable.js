import React from 'react';
import AllProviders from "./AllProviders/AllProviders";
import DefaultTable from "../Table/DefaultTable";

const ComplexTable = (props) => {
    return (
        <AllProviders {...props}>
            <DefaultTable />
        </AllProviders>
    );
};

export default ComplexTable;
