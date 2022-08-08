import React from "react";

import styles from "./TableMain.module.scss";

const Main = ({children}) => {
  return (
    <tbody className={styles.root}>
      {children}
    </tbody>
  );
};

export default Main;
