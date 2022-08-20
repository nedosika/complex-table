import React from "react";

import styles from "./Toolbar.module.scss";

const Toolbar = ({ children, colspan }) => (
  <tr>
    <th colSpan={colspan}>
      <div className={styles.root}>{children}</div>
    </th>
  </tr>
);

export default Toolbar;
