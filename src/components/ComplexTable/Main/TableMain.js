import React from 'react';

import styles from "./TableMain.module.scss";

const TableMain = ({rows, columns, components: {Header, Row}, componentsProps}) => {
    return (
        <div className={styles.root}>
            <Header columns={columns} {...componentsProps.Header} />
            {
                rows.map((row, index) =>
                    <Row row={row} columns={columns} key={index} index={index} {...componentsProps.Row} />
                )
            }
        </div>
    );
};

export default TableMain;