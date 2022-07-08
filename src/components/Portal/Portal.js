import React from "react";
import {createPortal} from "react-dom";

const Portal = ({ children, className, inset}) => {
    const container = document.createElement('div');

    React.useEffect(() => {
        container.classList.add(className);
        container.style.inset = inset;
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return createPortal(children, container);
}

export default Portal;