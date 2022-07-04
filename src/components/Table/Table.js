import React from 'react';

import styles from "./Table.module.scss";

const Table = ({
                   rows,
                   columns,
                   components: {
                       Toolbar,
                       Main,
                       Footer,
                       Row,
                       Cell,
                       Header,
                       Column,
                       ColumnTitle,
                       ColumnSeparator,
                       RowCounter
                   }
               }) => {

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
                            renderItem={(item) =>
                                <Column
                                    column={item}
                                    renderTitle={(title) => <ColumnTitle renderContent={title}/>}
                                    renderSeparator={ColumnSeparator}
                                />
                            }
                            items={columns}
                        />
                    }
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