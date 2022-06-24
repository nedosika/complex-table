import React from 'react';

import Title from "../Title";
import TableColumn from "../Column";
import CheckBoxSelection from "../CheckBoxSelection";

import styles from "./TableHeader.module.scss";

const TableHeader = ({columns, checked, setChecked}) => {
    const isChecked = checked.find((element) => element === true);
    const setCheckedAll = () =>
        isChecked
            ? setChecked(new Array(checked.length).fill(false))
            : setChecked(new Array(checked.length).fill(true));

    return (
        <div className={styles.root}>
            <TableColumn separator={false} menu={false}>
                <CheckBoxSelection
                    isChecked={isChecked}
                    setChecked={setCheckedAll}
                />
            </TableColumn>
            {
                columns.map(({field, width = 50, headerName}) =>
                    <TableColumn width={width} key={field}>
                        <Title>{headerName}</Title>
                    </TableColumn>
                )
            }
        </div>
    );
};

export default TableHeader;