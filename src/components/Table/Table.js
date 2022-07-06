import React from 'react';

import styles from "./Table.module.scss";

const Table = ({
                   rows,
                   columns,
                   getRowId,
                   components: {
                       Toolbar,
                       Main,
                       Footer,
                       Row,
                       Cell,
                       Header,
                       Column,
                       ColumnTitle,
                       ColumnMenu,
                       ColumnResizeIcon,
                       RowCounter
                   }
               }) => {

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                    components={{
                        Header,
                        Column,
                        ColumnTitle,
                        ColumnMenu,
                        ColumnResizeIcon,
                        Row,
                        Cell
                    }}
                />
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