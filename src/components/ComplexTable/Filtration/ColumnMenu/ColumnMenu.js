import React from 'react';
import styles from "./ColumnMenu.module.scss";
import Modal from "../../../Modal";
import Portal from "../../../Portal";

const ColumnMenu = ({
                        children,
                        onColumnClick,
                        isOpen,
                        anchorEl,
                        items = [],
                        onClose,
                        renderItem,
                        getKey = (item) => item.id
                    }) => isOpen &&
    <Modal onClose={onClose}>
        <Portal className={styles.root} inset={`${anchorEl.y}px auto auto ${anchorEl.x}px`}>
            <div className={styles.wrapper}>
                <ul>
                    {
                        items.map((item) =>
                            <li
                                key={getKey(item)}
                                onClick={(event) => {
                                    onColumnClick(item, event);
                                }}
                            >
                                {renderItem(item)}
                            </li>
                        )
                    }
                </ul>
                <hr/>
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </Portal>
    </Modal>

export default ColumnMenu;