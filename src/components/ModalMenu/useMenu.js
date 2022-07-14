import {useState} from "react";

const useMenu = () => {
    const [anchorEl, setAnchorEl] = useState();

    const toggleMenu = (event) => {
        event.stopPropagation();
        setAnchorEl((prevState) =>
            prevState ? null : {x: event.pageX, y: event.pageY});
    }

    return {isOpen: Boolean(anchorEl), anchorEl, toggleMenu}
}

export default useMenu;