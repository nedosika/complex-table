import React from 'react';

import Check from "../Check";
import Title from "./Title";
import Separator from "./Separator";
import TableColumn from "../Column";

import styles from "./TableHeader.module.scss";

const TableHeader = () => {
    return (
        <div className={styles.root}>
            <TableColumn>
                <Check/>
                <Separator/>
            </TableColumn>
            <TableColumn>
                <Title>ID</Title>
                <Separator/>
            </TableColumn>
            <TableColumn>
                <Title>First name</Title>
                <Separator/>
            </TableColumn>
            <TableColumn>
                <Title>Last name</Title>
                <Separator/>
            </TableColumn>
            <TableColumn>
                <Title>Age</Title>
                <Separator/>
            </TableColumn>
        </div>
    );
};

export default TableHeader;