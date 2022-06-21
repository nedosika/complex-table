import React from 'react';

import Check from "./Check";
import TableRow from "./Row";
import TableCell from "./Cell";
import TableHeader from "./Header";

import styles from "./TableMain.module.scss";

const TableMain = () => {
    return (
        <div className={styles.root}>
            <TableHeader/>
            <TableRow>
                <TableCell>
                    <Check/>
                </TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Check/>
                </TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
                <TableCell>Test</TableCell>
            </TableRow>
        </div>
    );
};

export default TableMain;