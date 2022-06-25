import React, {useState} from 'react';

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

const ComplexTable = ({
                          components: {},
                          columns = [],
                          rows = [],
                          checkboxSelection = true
                      }) => {
    const [checked, setChecked] = useState(new Array(rows.length).fill(false));
    const checkedCount = checked.filter((element) => element === true).length;
    const updateChecked = (id) => () =>
        setChecked((prevState) =>
            prevState.map((isChecked, index) =>
                id === index ? !isChecked : isChecked
            )
        );
    const isChecked = checked.find((element) => element === true);
    const setCheckedAll = () =>
        isChecked
            ? setChecked(new Array(checked.length).fill(false))
            : setChecked(new Array(checked.length).fill(true));

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Toolbar/>
                <Main>
                    <Header columns={columns} components={{Column}}>
                        <Column separator={false} menu={false}>
                            <CheckBoxSelection
                                isChecked={isChecked}
                                setChecked={setCheckedAll}
                            />
                        </Column>
                    </Header>
                    {
                        rows.map((row, index) =>
                            <TableRow>
                                <CheckBoxSelection isChecked={checked[index]} setChecked={updateChecked(index)}/>
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
                    <RowCount count={checkedCount}/>
                    <Pagination/>
                </Footer>
            </div>
        </div>
    )
}

export default ComplexTable;