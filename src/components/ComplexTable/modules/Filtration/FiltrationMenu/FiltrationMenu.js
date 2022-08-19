import React from "react";
import Menu from "../../../../Menu/Menu";
import Divider from "../../../../Menu/Divider";
import Button from "../../../../Button";
import { useFiltrationContext } from "../Filtration";
import MenuList from "./MenuList/MenuList";

const FiltrationMenu = () => {
  const {
    isOpen,
    anchorEl,
    filtrationActions: { toggleMenu, applyFilter, setAll },
  } = useFiltrationContext();

  const handleSelectAll = (event) => {
    event.stopPropagation();
    setAll(true);
  };

  const handleDeselectAll = (event) => {
    event.stopPropagation();
    setAll(false);
  };

  return (
    <Menu isOpen={isOpen} anchorEl={anchorEl} onClose={toggleMenu}>
      <MenuList />
      <Divider />
      <div>
        <Button onClick={applyFilter}>APPLY</Button>
        <Button onClick={handleSelectAll}>SELECT ALL</Button>
        <Button onClick={handleDeselectAll}>CLEAR</Button>
      </div>
    </Menu>
  );
};

export default FiltrationMenu;
