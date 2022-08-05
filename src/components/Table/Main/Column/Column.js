import React from "react";

import styles from "./Column.module.scss";

const Column = ({children, ...props}) => {
  return (
    <th className={styles.root} {...props}>
      <div className={styles.wrapper} >
          {children}
      </div>
    </th>
  );
};

export default Column;
