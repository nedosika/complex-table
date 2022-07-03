import React from 'react';
import Title from "../Table/Main/Column/Title";
import Sort from "./Sort";

const SortTitle = (props) => {
    const {direction, toggle} = props;

    return (
        <Title {...props} onClick={toggle}>
            <Sort direction={direction}/>
        </Title>
    );
};

export default SortTitle;