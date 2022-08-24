import React from "react";
import styles from "./TableRow.module.scss";

const Row = React.forwardRef(({ row, children, ...props }, ref) => {
  return (
    <tr className={styles.root} {...props} ref={ref}>
      {children}
    </tr>
  );
});

export default Row;
