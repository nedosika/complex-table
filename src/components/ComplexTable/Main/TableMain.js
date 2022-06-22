import React from 'react';

import CheckBoxSelection from "./CheckBoxSelection";
import TableRow from "./Row";
import TableCell from "./Cell";
import TableHeader from "./Header";

import styles from "./TableMain.module.scss";

const TableMain = () => {
    return (
        <div className={styles.root}>
            <TableHeader/>
            <TableRow>
                <CheckBoxSelection/>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
            </TableRow>
            <TableRow>
                <CheckBoxSelection/>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
            </TableRow>
        </div>
    );
};

export default TableMain;