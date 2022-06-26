import React from 'react';
import styles from "./TableRow.module.scss";

const TableRow = ({children, items = [], renderItem, renderSelection}) => {
    return (
        <div
            className={styles.root}
        >
            {renderSelection && renderSelection()}
            {items.map(renderItem)}
        </div>
    );
};

export default TableRow;