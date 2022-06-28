import React from 'react';

import Menu from "../Menu";
import Separator from "../Separator";

import styles from "./TableColumn.module.scss";

const TableColumn = ({children, menu = true, separator = true, width = 50}) => {
    return (
        <div
            className={styles.root}
            style={{
                minWidth: width,
                maxWidth: width
            }}
        >
            {children}
            {menu && <Menu/>}
            {separator && <Separator/>}
        </div>
    );
};

export default TableColumn;