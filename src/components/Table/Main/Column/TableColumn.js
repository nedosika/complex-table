import React from 'react';

import styles from "./TableColumn.module.scss";
import Separator from "../Separator";
import Menu from "../MenuButton";

const TableColumn = ({children, width = 50, title, separator = <Separator/>, menu = <Menu/>}) => {
    return (
        <div
            className={styles.root}
            style={{
                minWidth: width,
                maxWidth: width
            }}
        >
            {title}
            {children}
            {menu}
            {separator}
        </div>
    );
};

export default TableColumn;