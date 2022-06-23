import React from 'react';

import CheckBoxSelection from "./CheckBoxSelection";
import TableRow from "./Row";
import TableCell from "./Cell";
import TableHeader from "./Header";

import styles from "./TableMain.module.scss";

const TableMain = ({columns, rows, width}) => {
    return (
        <div className={styles.root}>
            <TableHeader columns={columns} width={width}/>
            {
                rows.map((row) =>
                    <TableRow width={width}>
                        <CheckBoxSelection/>
                        {
                            Object.entries(row).map(([field, value], index) =>
                                <TableCell width={columns[index].width}>{value}</TableCell>
                            )
                        }
                    </TableRow>
                )
            }
        </div>
    );
};

export default TableMain;