import React from 'react';

import ColumnMenuBtn from "../Table/Main/Column/Menu";
import filterIcon from "./filterIcon.svg";

const useFiltering = (props) => {
    console.log('filter')
    const {components: {Column, Header, ColumnTitle, ColumnSeparator}} = props;

    const FilteringColumn = ({headerName, children, width}) => {
        return (
            <Column width={width}>
                <ColumnTitle content={headerName}/>
                {children}
                <ColumnMenuBtn icon={filterIcon}/>
                <ColumnSeparator/>
            </Column>
        )
    }

    return {
        components: {
            Header: (props) =>
                <Header
                    {...props}
                    renderItem={FilteringColumn}
                />,
            Column: FilteringColumn,
        }
    }
};

export default useFiltering;