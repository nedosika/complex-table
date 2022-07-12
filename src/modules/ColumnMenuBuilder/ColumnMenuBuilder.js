import React from 'react';
import {merge, uniq, defaultsDeep, findKey, find} from "lodash";

import ColumnMenu from "./ColumnMenu";
import ColumnMenuItem from "./ColumnMenuItem";
import useMenu from "./useMenu";
import useFilter from "./useFilter";
import Button from "../../components/Button";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {rows, columns, components: {Column, ColumnMenu, ColumnMenuIcon, Header}, disableColumnMenu} = props;

    const {isOpen, anchorEl, toggleMenu} = useMenu(rows);
    const {filtered, toggleFilter, updateActiveField, menuItems, applyFilter, clearFilter} = useFilter(rows, columns);

    const handleToggleMenu = (event, field) => {
        toggleMenu(event);
        updateActiveField(field);
    }

    const ColumnWithMenu = (props) => {
        const {children, column: {field}} = props;

        return (
            <Column {...props}>
                {children}
                <ColumnMenuIcon onClick={(event) => handleToggleMenu(event, field)}/>
            </Column>
        )
    }

    const HeaderWithMenu = (props) =>
        <Header {...props}>
            {props.children}
            <ColumnMenu
                isOpen={isOpen}
                anchorEl={anchorEl}
                getKey={([key]) => key}
                items={menuItems}
                onClose={handleToggleMenu}
                renderItem={([item, isChecked]) =>
                    <ColumnMenuItem
                        isChecked={isChecked}
                        toggle={() => toggleFilter(item)}
                    >
                        {item}
                    </ColumnMenuItem>
                }
            >
                <div>
                    <Button onClick={applyFilter}>APPLY</Button>
                    <Button onClick={clearFilter}>CLEAR</Button>
                </div>
            </ColumnMenu>
        </Header>

    return {
        rows: filtered,
        components: {
            ...props.components,
            Column: disableColumnMenu ? Column : ColumnWithMenu,
            Header: HeaderWithMenu
        }
    }
};

export default ColumnMenuBuilder;