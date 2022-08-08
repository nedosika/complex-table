import React from "react";
import styles from "../Menu.module.scss";

const MenuView = ({ items, renderItem, onItemClick, getKey, children }) => {
  return (
    <div className={styles.root}>
      <ul>
        {items.map((item) => (
          <li key={getKey(item)} onClick={(event) => onItemClick(item, event)}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
      {children && (
        <>
          <hr />
          <div className={styles.children}>{children}</div>
        </>
      )}
    </div>
  );
};

export default MenuView;
