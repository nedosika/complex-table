import React, {useState} from 'react';

import ColumnMenu from "./ColumnMenu";
import Modal from "../../components/Modal";

const ColumnMenuBuilder = (props) => {
    console.log('column menu')

    const {components: {Column, ColumnMenu, ColumnMenuIcon, Header}, disableColumnMenu} = props;
    const [anchorEl, setAnchorEl] = useState();

    const handleToggle = (event) => {
        event.stopPropagation();
        setAnchorEl((prevState) => prevState ? null : {x: event.pageX, y: event.pageY});
    }

    const ColumnWithMenu = (props) => {
        const {children, column: {field, headerName}} = props;

        return (
            <Column {...props}>
                {children}
                <ColumnMenuIcon onClick={handleToggle}/>
            </Column>
        )
    }

    const HeadersMenu = (props) =>
        <Header {...props}>
            {props.children}
            {anchorEl &&
            <Modal onClose={handleToggle}>
                <ColumnMenu anchorEl={anchorEl}/>
            </Modal>
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