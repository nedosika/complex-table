import React, {useState} from 'react';

import Main from "./Main";
import Footer from "./Footer";

import styles from "./ComplexTable.module.scss";
import Pagination from "./Footer/Pagination";
import RowCount from "./Footer/RowCount";
import Header from "./Main/Header";
import TableRow from "./Main/Row";
import CheckBoxSelection from "./Main/CheckBoxSelection";
import Cell from "./Main/Cell";
import Column from "./Main/Column";

const CustomHeader = ({columns, checked, setChecked, }) => {
    const isChecked = checked.find((element) => element === true);
    const setCheckedAll = () =>
        isChecked
            ? setChecked(new Array(checked.length).fill(false))
            : setChecked(new Array(checked.length).fill(true));

    return (
        <Header columns={columns} components={{Column}}>
            <Column separator={false} menu={false}>
                <CheckBoxSelection
                    isChecked={isChecked}
                    setChecked={setCheckedAll}
                />
            </Column>
        </Header>
    )
}

const CustomRow = ({columns, row, index, checked, setChecked}) => {
    const updateChecked = (id) => () =>
        setChecked((prevState) =>
            prevState.map((isChecked, index) =>
                id === index ? !isChecked : isChecked
            )
        );

    return (
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

const ComplexTable = ({components: {Toolbar = null}, columns = [], rows = []}) => {
    const [checked, setChecked] = useState(new Array(rows.length).fill(false));
    const checkedCount = checked.filter((element) => element === true).length;

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {Toolbar && <Toolbar/>}
                <Main
                    components={{
                        Header: CustomHeader,
                        Row: CustomRow
                    }}
                    componentsProps={{
                        Header: {checked, setChecked},
                        Row: {checked, setChecked}
                    }}
                    columns={columns}
                    rows={rows}
                />
                <Footer>
                    <RowCount count={checkedCount}/>
                    <Pagination/>
                </Footer>
            </div>
        </div>
    )
}

export default ComplexTable;