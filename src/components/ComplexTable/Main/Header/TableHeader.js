import React from 'react';

import Check from "../Check";
import Title from "./Title";
import TableColumn from "../Column";

import styles from "./TableHeader.module.scss";

const TableHeader = () => {
    return (
        <div className={styles.root}>
            <TableColumn>
                <Check/>
            </TableColumn>
            <TableColumn>
                ID
            </TableColumn>
            <TableColumn>
                First name
            </TableColumn>
            <TableColumn>
                Last name
            </TableColumn>
            <TableColumn>
                Age
            </TableColumn>
        </div>
    );
};

export default TableHeader;