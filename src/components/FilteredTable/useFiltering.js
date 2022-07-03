import React from 'react';
import TableColumn from "../Table/Main/Column";
import Menu from "../Table/Main/MenuButton";
import filterIcon from "./filterIcon.svg";

const FilteringColumn = (props) =>
    <TableColumn {...props} menu={<Menu icon={filterIcon}/>}/>

const useFiltering = (props) => {
    const components = {
        Column: FilteringColumn
    }

    const componentsProps = {
        // Column: {
        //     //menu: <div>2</div>,
        // }
    }

    return {
        components,
        componentsProps
    }
};

export default useFiltering;