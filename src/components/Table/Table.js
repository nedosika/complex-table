import React from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";
import TableCell from "./Main/Cell";
import TableToolbar from "./Toolbar";
import TableRow from "./Main/Row";
import TableHeader from "./Main/Header";
import TableColumn from "./Main/Column";
import RowCounter from "./Footer/RowCounter";
import ColumnTitle from "./Main/Column/Title";

import styles from "./Table.module.scss";
import TableColumnSeparator from "./Main/Separator";
import TableHeaderMenu from "./Main/MenuButton";

const Table = ({
   columns = [],
   rows = [],
   components,
   componentsProps
}) => {

    const {
        Toolbar,
        Header,
        Main,
        Footer,
        Row,
        Cell,
        Column,
        Menu,
        Separator,
        Title
    } = Object.assign({
        Toolbar: TableToolbar,
        Header: TableHeader,
        Main: TableMain,
        Footer: TableFooter,
        Row: TableRow,
        Cell: TableCell,
        Column: TableColumn,
        Title: ColumnTitle,
        Menu: TableHeaderMenu,
        Separator: TableColumnSeparator
    }, components)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar {...componentsProps?.Toolbar}/>
                <Main
                    items={rows}
                    renderItem={(item) =>
                        <Row
                            row={item}
                            items={columns}
                            renderItem={(cell) =>
                                <Cell width={cell.width} {...componentsProps?.Cell}>{item[cell.field]}</Cell>
                            }
                            {...componentsProps?.Row}
                        />
                    }
                    {...componentsProps?.Main}
                >
                    <Header
                        items={columns}
                        renderItem={({headerName, width}) =>
                            <Column
                                width={width}
                                title={
                                    <Title content={headerName} {...componentsProps?.Title}/>
                                }
                                {...componentsProps?.Column}
                            />
                        }
                        {...componentsProps?.Header}
                    />
                </Main>
                <Footer {...componentsProps?.Footer}>
                    <RowCounter>
                        {rows.length} row{rows.length > 1 && 's'}
                    </RowCounter>
                </Footer>
            </div>
        </div>
    )
}

export default Table;