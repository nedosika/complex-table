import React from 'react';
import {merge, uniq, defaultsDeep, findKey, find} from "lodash";

import ColumnMenu from "./ColumnMenu";
import ColumnMenuItem from "./ColumnMenuItem";
import useMenu from "./useMenu";
import useFilter from "./useFilter";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {rows, columns, components: {Column, ColumnMenu, ColumnMenuIcon, Header}, disableColumnMenu} = props;

    const {isOpen, anchorEl, toggleMenu} = useMenu(rows);
    const {filtered, setFilter, setActiveField, activeMenuItems} = useFilter(rows, columns);

    const handleToggleMenu = (event, field) => {
        toggleMenu(event);
        setActiveField(field);
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
                items={activeMenuItems}
                onClose={handleToggleMenu}
                renderItem={({item, isChecked}) =>
                    <ColumnMenuItem
                        isChecked={isChecked}
                        toggle={() => setFilter(item)}
                    >
                        {item}
                    </ColumnMenuItem>
                }
            />
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