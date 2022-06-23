import React from 'react';

import Title from "../Title";
import TableColumn from "../Column";
import CheckBoxSelection from "../CheckBoxSelection";

import styles from "./TableHeader.module.scss";

const TableHeader = ({columns, width}) => {
    return (
        <div className={styles.root} style={{
            minWidth: width,
            maxWidth: width
        }}>
            <TableColumn separator={false} menu={false}>
                <CheckBoxSelection/>
            </TableColumn>
            {
                columns.map(({width = 50, headerName}) =>
                    <TableColumn width={width}>
                        <Title>{headerName}</Title>
                    </TableColumn>
                )
            }
        </div>
    );
};

export default TableHeader;