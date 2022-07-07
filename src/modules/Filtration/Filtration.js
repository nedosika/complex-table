import React, {useState} from 'react';

import filterIcon from "./filterIcon.svg";

const Filtration = (props) => {
    console.log('filter')
    const {components: {ColumnMenu}} = props;

    console.log(props)

    const [isOpenTooltip, setIsOpenTooltip] = useState(false);

    const toggleTooltip = () =>
        setIsOpenTooltip(!isOpenTooltip)

    const FilterColumnMenu = () =>
        <ColumnMenu icon={filterIcon} onClick={toggleTooltip} />

    return {
        components: {
            ColumnMenu: FilterColumnMenu
        }
    }
};

export default Filtration;