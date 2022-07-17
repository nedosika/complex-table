import React from "react";

import styles from "./Table.module.scss";
import { useTableProps } from "../../contexts/ComplexTable/ComplexTable";

const Table = () => {
  const {
    components: { Toolbar, Main, Footer },
  } = useTableProps();

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {Toolbar && <Toolbar />}
        {Main && <Main />}
        {Footer && <Footer />}
      </div>
    </div>
  );
};

export default Table;
