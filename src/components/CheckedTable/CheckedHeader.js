import React from 'react';
import Header from "../Table/Main/Header/TableHeader";
import Column from "../Table/Main/Column/TableColumn";
import CheckBoxSelection from "./CheckBoxSelection";

const CheckedHeader = ({isShow, toggle, isChecked, ...props}) =>
    <Header {...props}>
        {
            isShow &&
            <Column separator={false} menu={false}>
                <CheckBoxSelection
                    isChecked={isChecked}
                    toggle={toggle}
                />
            </Column>
        }
    </Header>

export default CheckedHeader;