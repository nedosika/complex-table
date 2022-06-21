import React from 'react';
import styles from "./TableMain.module.scss";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";
import TableCell from "../TableCell";
import Check from "../Check";

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