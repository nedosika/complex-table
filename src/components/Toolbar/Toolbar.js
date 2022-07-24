import React from "react";

import styles from "./Toolbar.module.scss";

const Toolbar = ({ children }) => <div className={styles.root}>{children}</div>;

export default Toolbar;
