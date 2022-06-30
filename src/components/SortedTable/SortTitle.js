import React, {useState} from 'react';
import Title from "../Table/Main/Column/Title";
import Sort from "./Sort";

const SortTitle = (props) => {
    const {toggle, sortable} = props;

    return (
        <Title {...props}>
            {sortable && <Sort toggle={toggle}/>}
        </Title>
    );
};

export default SortTitle;