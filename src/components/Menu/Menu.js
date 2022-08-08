import React from "react";
import Modal from "../Modal";
import Portal from "../Portal";
import styles from "./Menu.module.scss";

const Menu = ({ children, isOpen, anchorEl, onClose }) => {
  // const {
  //   // onItemClick,
  //   isOpen,
  //   anchorEl,
  //   // items = [],
  //   onClose,
  //   // renderItem = (item) => item,
  //   // getKey = (item) => item.id,
  // } = usePopupMenuContext();

  return (
    isOpen && (
      <Modal onClose={onClose}>
        <Portal inset={`${anchorEl.y}px auto auto ${anchorEl.x}px`}>
          <div className={styles.root}>
            <ul>{children}</ul>
          </div>
        </Portal>
      </Modal>
    )
  );
};

export default Menu;
