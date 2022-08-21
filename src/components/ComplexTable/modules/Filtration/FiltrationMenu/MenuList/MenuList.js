import React from "react";
import ColumnMenuItem from "../ColumnMenuItem";
import { useFiltrationContext } from "../../useFiltrationContext";
import styles from "./MenuList.module.scss";

const MenuList = () => {
  const {
    menuItems,
    filtrationActions: { toggleFilter },
  } = useFiltrationContext();

    const handleClickItem = (field) => (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFilter(field)
    }

  return (
    <div className={styles.root}>
      <ul>
        {menuItems.map(([field, isChecked]) => (
          <ColumnMenuItem
            isChecked={isChecked}
            onClick={handleClickItem(field)}
            key={field}
            id={field}
          >
            {field}
          </ColumnMenuItem>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
