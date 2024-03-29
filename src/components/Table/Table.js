import React from "react";

import styles from "./Table.module.scss";

const Table = ({ children }) => {
    return (
        <table className={styles.root}>
            {children}
        </table>
    );
};

export default Table;
