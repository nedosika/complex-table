import React from "react";

import styles from "./Toolbar.module.scss";

const Toolbar = ({ children, colSpan }) => (
  <tr>
    <th colSpan={colSpan}>
      <div className={styles.root}>{children}</div>
    </th>
  </tr>
);

export default Toolbar;
