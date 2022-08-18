import React from "react";
import Modal from "../Modal";
import styles from "./Menu.module.scss";

const Menu = ({ children, isOpen, anchorEl, onClose, sx }) => {
  return (
    isOpen && (
      <Modal onClose={onClose}>
        <div
          className={styles.root}
          style={{
            inset: `${anchorEl.y}px auto auto ${anchorEl.x}px`,
              ...sx
          }}
        >
          {children}
        </div>
      </Modal>
    )
  );
};

export default Menu;
