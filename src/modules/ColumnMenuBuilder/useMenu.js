import {useState} from "react";
import {getUniq} from "../../helpers";

const useMenu = (rows) => {
    const [anchorEl, setAnchorEl] = useState();

    const handleToggleMenu = (event, field) => {
        event.stopPropagation();
        setAnchorEl((prevState) =>
            prevState ? null : {items: getUniq(rows.map((row) => row[field])), x: event.pageX, y: event.pageY, field});
    }

    return {anchorEl, handleToggleMenu}
}

export default useMenu;