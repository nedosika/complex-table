import React from 'react';
import Header from "../Table/Main/Header/TableHeader";
import CheckBoxSelection from "./CheckBoxSelection";

const CheckedHeader = ({checkboxSelection, toggle, isChecked, ...props}) =>
    <Header {...props}>
        <CheckBoxSelection
            isChecked={isChecked}
            toggle={toggle}
        />
    </Header>

export default CheckedHeader;