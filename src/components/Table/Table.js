import React, {useState} from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";
import TableCell from "./Main/Cell";
import TableToolbar from "./Toolbar";
import TableRow from "./Main/Row";
import TableHeader from "./Main/Header";
import TableColumn from "./Main/Column";

import styles from "./Table.module.scss";
import RowCounter from "./Footer/RowCounter";
import CheckboxSelectionWrapper from "../CheckedTable";
import compose from "../../helpers/compose";
import SortedWrapper from "../SortedTable/SortedWrapper";
import Title from "./Main/Column/Title";

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
        Column
    } = Object.assign({
        Toolbar: TableToolbar,
        Header: TableHeader,
        Main: TableMain,
        Footer: TableFooter,
        Row: TableRow,
        Cell: TableCell,
        Column: TableColumn,
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
                                <Title content={headerName}/>
                            </Column>
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

export default compose(CheckboxSelectionWrapper, SortedWrapper)(Table);