import React from 'react';

import Title from "../Title";
import TableColumn from "../Column";
import CheckBoxSelection from "../CheckBoxSelection";

import styles from "./TableHeader.module.scss";

const TableHeader = () => {
    return (
        <div className={styles.root}>
            <TableColumn separator={false} menu={false}>
                <CheckBoxSelection/>
            </TableColumn>
            <TableColumn width={120}>
                <Title>ID</Title>
            </TableColumn>
            <TableColumn width={120}>
                <Title>First name</Title>
            </TableColumn>
            <TableColumn width={120}>
                <Title>Last name</Title>
            </TableColumn>
            <TableColumn width={120}>
                <Title>Age</Title>
            </TableColumn>
        </div>
    );
};

export default TableHeader;