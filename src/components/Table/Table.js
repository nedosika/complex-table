import React from 'react';

import styles from "./Table.module.scss";
import Title from "./Main/Column/Title";

const Table = ({rows, columns, components: {Toolbar, Main, Footer, Row, Cell, Header, Column, RowCounter}}) => {

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main
                    items={rows}
                    renderItem={(item) =>
                        <Row
                            row={item}
                            items={columns}
                            renderItem={(cell) =>
                                <Cell width={cell.width}>{item[cell.field]}</Cell>
                            }
                        />
                    }
                    header={
                        <Header
                            renderItem={({headerName, width}) =>
                                <Column
                                    width={width}
                                    title={<Title content={headerName}/>}
                                />
                            }
                            items={columns}
                        />
                    }
                />,
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