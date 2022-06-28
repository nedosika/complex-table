import React from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";
import TableCell from "./Main/Cell";
import TableToolbar from "./Toolbar";
import Title from "./Main/Title";
import TableRow from "./Main/Row";
import Header from "./Main/Header";
import Column from "./Main/Column";
import Pagination from "./Footer/Pagination";

import styles from "./Table.module.scss";
import TableHeader from "./Main/Header";

const Table = ({
                   columns = [],
                   rows = [],
                   pagination = false,
                   components,
                   componentsProps
               }) => {

    const {
        Toolbar,
        Header,
        Main,
        Footer,
        Row,
        Cell
    } = Object.assign({
        Toolbar: TableToolbar,
        Header: TableHeader,
        Main: TableMain,
        Footer: TableFooter,
        Row: TableRow,
        Cell: TableCell
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
                            <Column width={width}>
                                <Title>{headerName}</Title>
                            </Column>
                        }
                        {...componentsProps?.Header}
                    />
                </Main>
                <Footer {...componentsProps?.Footer}>
                    {/*{checkboxSelection && <RowCount count={selected.length}/>}*/}
                    {pagination && <Pagination/>}
                </Footer>
            </div>
        </div>
    )
}

export default Table;