import React from 'react';
import Title from "../Table/Main/Column/Title";
import Sort from "./Sort";

const SortTitle = (props) => {
    const {toggle, sortable, direction} = props;

    return (
        <Title {...props}>
            {sortable && <Sort toggle={toggle} direction={direction}/>}
        </Title>
    );
};

export default SortTitle;