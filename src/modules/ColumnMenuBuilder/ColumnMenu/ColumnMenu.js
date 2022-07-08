import React from 'react';
import styles from "./ColumnMenu.module.scss";
import Portal from "../../../components/Portal";
import Modal from "../../../components/Modal";

const ColumnMenu = ({anchorEl, items = [], onClose, renderItem}) => {
    return (
        <Modal onClose={onClose}>
            <Portal className={styles.root} inset={`${anchorEl.y}px auto auto ${anchorEl.x}px`}>
                <div className={styles.wrapper}>
                    <ul>
                        {
                            items.map((item) => <li key={item}>{renderItem(item)}</li>)
                        }
                    </ul>
                </div>

            </Portal>
        </Modal>
    );
};

export default ColumnMenu;