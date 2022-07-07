import React, {useState} from 'react';

import filterIcon from "./filterIcon.svg";
import ColumnFilterIcon from "./ColumnFilterIcon";
import Column from "../../components/Table/Main/Column";

const Filtration = (props) => {
    console.log('filter')
    const {components: {ColumnMenu, ColumnMenuIcon}, disableColumnFilter} = props;

    const [isOpenTooltip, setIsOpenTooltip] = useState(false);

    const toggleTooltip = () =>
        setIsOpenTooltip(!isOpenTooltip)

    const FilterColumnMenu = () =>
        <ColumnMenu icon={filterIcon} onClick={toggleTooltip} />

        const FilteredColumn = (props) =>
            <Column {...props}/>

    return {
        components: {
            //ColumnMenuIcon: FilterColumnMenu
            //ColumnMenu: FilterColumnMenu
            //Column: FilteredColumn,
            ColumnMenuIcon: disableColumnFilter ? ColumnMenuIcon : ColumnFilterIcon
        }
    }
};

export default Filtration;