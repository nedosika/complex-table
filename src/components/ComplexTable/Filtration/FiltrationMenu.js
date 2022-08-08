import React from 'react';
import Menu from "../../Menu/Menu";
import ColumnMenuItem from "./ColumnMenuItem";
import Divider from "../../Menu/Divider";
import Button from "../../Button";
import {useFiltrationContext} from "./Filtration";

const FiltrationMenu = () => {
    const {
        isOpen,
        anchorEl,
        menuItems,
        filtrationActions: { toggleMenu, applyFilter, clearFilter, toggleFilter },
    } = useFiltrationContext();
    return (
        <Menu isOpen={isOpen} anchorEl={anchorEl} onClose={toggleMenu}>
            {menuItems?.map(([field, isChecked]) => (
                <ColumnMenuItem
                    isChecked={isChecked}
                    onClick={toggleFilter(field)}
                    key={field}
                    id={field}
                >
                    {field}
                </ColumnMenuItem>
            ))}
            <Divider />
            <div>
                <Button onClick={applyFilter}>APPLY</Button>
                <Button onClick={clearFilter}>CLEAR</Button>
            </div>
        </Menu>
    );
};

export default FiltrationMenu;