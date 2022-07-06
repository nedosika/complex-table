import React from 'react';

import filterIcon from "./filterIcon.svg";

const useFiltering = (props) => {
    console.log('filter')
    const {components: {ColumnMenu}} = props;

    const FilterColumnMenu = () =>
        <ColumnMenu icon={filterIcon}/>

    return {
        components: {
            ColumnMenu: FilterColumnMenu
        }
    }
};

export default useFiltering;