import React, { createContext, useContext } from "react";
import { useTableContext } from "../../Table/useTableContext";
import MenuView from "../../Menu";
import useMenu from "../../Menu/useMenu";

const PopupMenuContext = createContext({});

export const usePopupMenuContext = () => useContext(PopupMenuContext);

const PopupMenuProvider = ({ children }) => {
  const { Menu, isOpen, anchorEl, toggleMenu } = useMenu();

  console.log(useMenu());

  return (
    <PopupMenuContext.Provider
      value={{ popupMenuActions: { toggleMenu }, isOpen, anchorEl }}
    >
      {children}
      <Menu>
        <Menu />
      </Menu>
    </PopupMenuContext.Provider>
  );
};

export default PopupMenuProvider;
