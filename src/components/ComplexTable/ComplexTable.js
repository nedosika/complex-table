import React from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";

import styles from "./ComplexTable.module.scss";

const ComplexTable = (props) => {
    const {Toolbar} = Object.assign(
        {
            Toolbar: null
        },
        props.components
    );

    const toolbar = Toolbar ? <Toolbar/> : null;

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {toolbar}
                <TableMain/>
                <TableFooter/>
            </div>
        </div>
    );
};

export default ComplexTable;