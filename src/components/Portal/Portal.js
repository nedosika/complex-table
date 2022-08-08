import React from "react";
import {createPortal} from "react-dom";
import styles from "./Portal.module.css"

const Portal = ({ children, inset}) => {
    const container = document.createElement('div');

    React.useEffect(() => {
        container.classList.add(styles.root);
        container.style.inset = inset;
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        }
    }, [])

    return createPortal(children, container);
}

export default Portal;