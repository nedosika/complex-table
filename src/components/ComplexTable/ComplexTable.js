import React from 'react';
import TableHeader from "../TableHeader";
import TableMain from "../TableMain";
import styles from "./styles.module.css";

const ComplexTable = () => {
    return (
        <div className={styles.root}>
           <TableHeader/>
           <TableMain/>
        </div>
    );
};

export default ComplexTable;