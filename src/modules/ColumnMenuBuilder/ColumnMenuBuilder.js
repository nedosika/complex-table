import React, {useState} from 'react';

import ColumnMenu from "./ColumnMenu";
import Modal from "../../components/Modal";
import {getUniq} from "../../helpers";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {rows, components: {Column, ColumnMenu, ColumnMenuIcon, Header}, disableColumnMenu} = props;
    const [anchorEl, setAnchorEl] = useState();

    const handleToggle = (event, field) => {
        event.stopPropagation();
        setAnchorEl((prevState) =>
            prevState ? null : {items: getUniq(rows.map((row) => row[field])), x: event.pageX, y: event.pageY});
    }

    const ColumnWithMenu = (props) => {
        const {children, column: {field, headerName}} = props;

        return (
            <Column {...props}>
                {children}
                <ColumnMenuIcon onClick={(event) => handleToggle(event, field)}/>
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
                onClose={handleToggle}
                renderItem={(item) => <label htmlFor='menuItem'><input id='menuItem' type='checkbox'/>{item}</label> }
            />
            }
        </Header>

    return {
        components: {
            Column: disableColumnMenu ? Column : ColumnWithMenu,
            Header: HeadersMenu
        }
    }
};

export default ColumnMenuBuilder;