import React from 'react';

import styles from "./TableMain.module.scss";
import {useTableProps} from "../../../contexts/ComplexTable/ComplexTable";

const TableMain = () => {
    const {
        rows,
        getRowId,
        components: {
            Row,
            Header,
        }
    } = useTableProps();

    return (
        <div className={styles.root}>
            <Header/>
            {
                rows.map((row) =>
                    <Row
                        row={row}
                        key={getRowId(row)}
                    />
                )
            }
        </div>
    );
};

export default TableMain;