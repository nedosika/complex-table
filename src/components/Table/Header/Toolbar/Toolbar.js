import React from "react";

import styles from "./Toolbar.module.scss";

const Toolbar = ({ children, colspan }) => (
  <tr className={styles.root}>
    <th colSpan={colspan}>
      <div className={styles.content}>{children}</div>
    </th>
  </tr>
);

export default Toolbar;
