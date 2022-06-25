import React from 'react';

import Main from "./Main";
import Footer from "./Footer";
import Cell from "./Main/Cell";
import Toolbar from "./Toolbar";
import TableRow from "./Main/Row";
import Header from "./Main/Header";
import Column from "./Main/Column";
import RowCount from "./Footer/RowCount";
import Pagination from "./Footer/Pagination";
import CheckBoxSelection from "./Main/CheckBoxSelection";

import styles from "./ComplexTable.module.scss";
import useCheckboxSelection from "../../hooks/useCheckboxSelection";

const ComplexTable = ({
                          columns = [],
                          rows = [],
                          checkboxSelection = true
                      }) => {
    const {checked, setAll, updateChecked} = useCheckboxSelection(rows);

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main>
                    <Header columns={columns} components={{Column}}>
                        <Column separator={false} menu={false}>
                            <CheckBoxSelection
                                isChecked={checked.length}
                                setChecked={setAll}
                            />
                        </Column>
                    </Header>
                    {
                        rows.map((row) =>
                            <TableRow key={row.id}>
                                <CheckBoxSelection isChecked={checked.includes(row.id)} setChecked={() => updateChecked(row.id)}/>
                                {
                                    columns.map((column) =>
                                        <Cell width={column.width} key={column.field}>{row[column.field]}</Cell>
                                    )
                                }
                            </TableRow>
                        )
                    }
                </Main>
                <Footer>
                    <RowCount count={checked.length}/>
                    <Pagination/>
                </Footer>
            </div>
        </div>
    )
}

export default ComplexTable;