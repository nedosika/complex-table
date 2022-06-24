import React from 'react';

import styles from "./TableHeader.module.scss";
import Title from "../Title";

const TableHeader = ({children, columns, components: {Column}}) => {
    return (
        <div className={styles.root}>
            {children}
            {
                columns.map(({field, width = 50, headerName}) =>
                    <Column width={width} key={field}>
                        <Title>{headerName}</Title>
                    </Column>
                )
            }
        </div>
    );
};

export default TableHeader;