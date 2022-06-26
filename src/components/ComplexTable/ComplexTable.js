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
import Title from "./Main/Title";

const ComplexTable = ({
                          columns = [],
                          rows = [],
                          checkboxSelection = true,
                          pagination = true
                      }) => {
    const {checked, setAll, updateChecked} = useCheckboxSelection(rows);

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main
                    items={rows}
                    renderItem={(item) =>
                        <TableRow
                            items={columns}
                            renderItem={(cell) =>
                                <Cell width={cell.width}>{item[cell.field]}</Cell>
                            }
                            renderSelection={() => checkboxSelection &&
                                <CheckBoxSelection isChecked={checked.includes(item.id)}
                                                   setChecked={() => updateChecked(item.id)}/>
                            }
                        />
                    }
                    renderHeader={() =>
                        <Header
                            columns={columns}
                            renderColumn={({headerName, width}) =>
                                <Column width={width}>
                                    <Title>{headerName}</Title>
                                </Column>
                            }
                            renderSelection={() => checkboxSelection &&
                                <Column separator={false} menu={false}>
                                    <CheckBoxSelection
                                        isChecked={checked.length}
                                        setChecked={setAll}
                                    />
                                </Column>
                            }
                        />
                    }
                />
                <Footer>
                    {checkboxSelection && <RowCount count={checked.length}/>}
                    {pagination && <Pagination/>}
                </Footer>
            </div>
        </div>
    )
}

export default ComplexTable;