import React from 'react';
import styles from "./Modal.module.scss"

const Modal = ({children, onClose}) => {
    return (
        <div className={styles.root} onClick={onClose}>
            {children}
        </div>
    );
};

export default Modal;