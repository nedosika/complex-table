import React, {useState} from 'react';

import ColumnMenu from "./ColumnMenu";
import Modal from "../../components/Modal";
import {getUniq} from "../../helpers";
import ColumnMenuItem from "./ColumnMenuItem";
import useMenu from "./useMenu";
import useFilter from "./useFilter";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {rows, components: {Column, ColumnMenu, ColumnMenuIcon, Header}, disableColumnMenu} = props;

    const {anchorEl, handleToggleMenu} = useMenu(rows);
    const {filteredRows, handleChangeFilter} = useFilter(rows, anchorEl?.field);

    const ColumnWithMenu = (props) => {
        const {children, column: {field}} = props;

        return (
            <Column {...props}>
                {children}
                <ColumnMenuIcon onClick={(event) => handleToggleMenu(event, field)}/>
            </Column>
        )
    }

    const HeadersMenu = (props) =>
        <Header {...props}>
            {props.children}
            {anchorEl &&
            <ColumnMenu
                anchorEl={anchorEl}
                items={anchorEl.items}
                onClose={handleToggleMenu}
                renderItem={(item) => <ColumnMenuItem toggle={() => handleChangeFilter(item)}>{item}</ColumnMenuItem> }
            />
            }
        </Header>

    return {
        rows: filteredRows,
        components: {
            Column: disableColumnMenu ? Column : ColumnWithMenu,
            Header: HeadersMenu
        }
    }
};

export default ColumnMenuBuilder;