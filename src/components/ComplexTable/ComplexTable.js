import React from 'react';

import Main from "./Main";
import Footer from "./Footer";
import Cell from "./Main/Cell";
import Toolbar from "./Toolbar";
import Title from "./Main/Title";
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
                          checkboxSelection = true,
                          pagination = true,
                          components,
                          componentsProps
                      }) => {
    const {
        CustomToolbar,
        CustomMain,
        CustomFooter
    } = Object.assign({}, components);
    const {selected, toggleSelectedAll, toggleSelected} = useCheckboxSelection(rows);

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {
                    CustomToolbar
                        ? <CustomToolbar {...componentsProps.CustomToolbar}/>
                        : <Toolbar/>
                }
                {
                    CustomMain
                        ? <CustomMain {...componentsProps.CustomMain}/>
                        : <Main
                            items={rows}
                            renderItem={(item) =>
                                <TableRow
                                    items={columns}
                                    renderItem={(cell) =>
                                        <Cell width={cell.width}>{item[cell.field]}</Cell>
                                    }
                                    renderSelection={() => checkboxSelection &&
                                        <CheckBoxSelection isChecked={selected.includes(item.id)}
                                                           toggle={() => toggleSelected(item.id)}/>
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
                                                isChecked={selected.length}
                                                toggle={toggleSelectedAll}
                                            />
                                        </Column>
                                    }
                                />
                            }
                        />
                }
                {
                    CustomFooter
                        ? <CustomFooter {...componentsProps.CustomFooter}/>
                        : <Footer>
                            {checkboxSelection && <RowCount count={selected.length}/>}
                            {pagination && <Pagination/>}
                        </Footer>
                }
            </div>
        </div>
    )
}

export default ComplexTable;