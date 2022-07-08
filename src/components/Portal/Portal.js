import React from "react";
import {createPortal} from "react-dom";

const Portal = ({ children}) => {
    const container = document.createElement('div');

    React.useEffect(() => {
        document.body.appendChild(container)
        return () => {
            document.body.removeChild(container)
        }
    }, [])

    return createPortal(children, container)
}

export default Portal;