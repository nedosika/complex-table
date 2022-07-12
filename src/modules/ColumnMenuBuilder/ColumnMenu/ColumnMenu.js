import React from 'react';
import styles from "./ColumnMenu.module.scss";
import Portal from "../../../components/Portal";
import Modal from "../../../components/Modal";

const ColumnMenu = ({isOpen, anchorEl, items = [], onClose, renderItem}) => isOpen &&
        <Modal onClose={onClose}>
            <Portal className={styles.root} inset={`${anchorEl.y}px auto auto ${anchorEl.x}px`}>
                <div className={styles.wrapper}>
                    <ul>
                        {
                            items.map(([key, value]) => <li key={key}>{renderItem({item: key, isChecked: value})}</li>)
                        }
                    </ul>
                </div>
            </Portal>
        </Modal>

export default ColumnMenu;