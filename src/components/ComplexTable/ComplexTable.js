import React from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";

import styles from "./ComplexTable.module.scss";

const CHECK_WIDTH = 50;

const ComplexTable = ({Toolbar = null, columns = [], rows = []}) => {
    const width = columns.reduce((previousValue, {width}) =>
        previousValue + width, 0) + CHECK_WIDTH;

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {Toolbar && <Toolbar/>}
                <TableMain columns={columns} rows={rows} width={width}/>
                <TableFooter/>
            </div>
        </div>
    );
};

export default ComplexTable;