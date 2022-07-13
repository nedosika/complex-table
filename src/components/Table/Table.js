import React from 'react';

import styles from "./Table.module.scss";
import {useTableProps} from "../../contexts/ComplexTable/ComplexTable";

const Table = () => {
    const {
        rows,
        components: {
            Toolbar,
            Main,
            Footer,
            RowCounter
        }
    } = useTableProps();

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main/>
                <Footer>
                    <RowCounter>
                        {rows.length} row{rows.length > 1 && 's'}
                    </RowCounter>
                </Footer>
            </div>
        </div>
    )
}

export default Table;