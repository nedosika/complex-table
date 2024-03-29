import React from "react";
import styles from "./TableFooter.module.scss";

const Footer = ({ children, ...props }) => {
  return (
    <tfoot>
      <tr>
        <td className={styles.root} {...props}>
          <div className={styles.wrapper}>{children}</div>
        </td>
      </tr>
    </tfoot>
  );
};

export default Footer;
