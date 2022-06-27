import React from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";
import TableCell from "./Main/Cell";
import TableToolbar from "./Toolbar";
import Title from "./Main/Title";
import TableRow from "./Main/Row";
import Header from "./Main/Header";
import Column from "./Main/Column";
import RowCount from "./Footer/RowCount";
import Pagination from "./Footer/Pagination";
import CheckBoxSelection from "./Main/CheckBoxSelection";

import styles from "./Table.module.scss";
import useCheckboxSelection from "../../hooks/useCheckboxSelection";

const Table = ({
                   columns = [],
                   rows = [],
                   checkboxSelection = false,
                   pagination = false,
                   components,
                   componentsProps,
                   getRowId
               }) => {

    const {
        Toolbar,
        Main,
        Footer,
        Row,
        Cell
    } = Object.assign({
        Toolbar: TableToolbar,
        Main: TableMain,
        Footer: TableFooter,
        Row: TableRow,
        Cell: TableCell
    }, components)
    // const {selected, toggleSelectedAll, toggleSelected} = useCheckboxSelection({rows, getRowId});


    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar {...componentsProps?.Toolbar}/>
                <Main
                    items={rows}
                    renderItem={(row) =>
                        <Row
                            row={row}
                            items={columns}
                            renderItem={(cell) =>
                                <Cell width={cell.width} {...componentsProps?.Cell}>{row[cell.field]}</Cell>
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
                    >
                        {/*{*/}
                        {/*    checkboxSelection &&*/}
                        {/*    <Column separator={false} menu={false}>*/}
                        {/*        <CheckBoxSelection*/}
                        {/*            isChecked={selected.length}*/}
                        {/*            toggle={toggleSelectedAll}*/}
                        {/*        />*/}
                        {/*    </Column>*/}
                        {/*}*/}
                    </Header>
                </Main>
                <Footer {...componentsProps?.Footer}>
                    {/*{checkboxSelection && <RowCount count={selected.length}/>}*/}
                    {pagination && <Pagination/>}
                </Footer>
            </div>
        </div>
    )
}

// Table.defaultProps = {
//     columns: [],
//     rows: [],
//     checkboxSelection: false,
//     pagination: false,
//     components: {},
//     componentsProps: {},
//     getRowId: (row) => row.id
// };

export default Table;