import React from 'react';

import CheckBoxSelection from "./CheckBoxSelection";
import TableRow from "./Row";
import TableCell from "./Cell";
import TableHeader from "./Header";

import styles from "./TableMain.module.scss";

const TableMain = ({columns, rows, checked, setChecked}) => {
    const updateChecked = (id) => () =>
        setChecked((prevState) =>
            prevState.map((isChecked, index) =>
                id === index ? !isChecked : isChecked
            )
        )

    return (
        <div className={styles.root}>
            <TableHeader columns={columns} checked={checked} setChecked={setChecked}/>
            {
                rows.map((row, index) =>
                    <TableRow key={index}>
                        <CheckBoxSelection isChecked={checked[index]} setChecked={updateChecked(index)}/>
                        {
                            columns.map((column) =>
                                <TableCell width={column.width} key={column.field}>{row[column.field]}</TableCell>
                            )
                        }
                    </TableRow>
                )
            }
        </div>
    );
};

export default TableMain;