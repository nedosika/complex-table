import React from 'react';
import styles from "./ColumnMenu.module.scss";
import Portal from "../../../components/Portal";

const ColumnMenu = ({anchorEl}) => {
    return (
        <Portal className={styles.root} inset={`${anchorEl.y}px auto auto ${anchorEl.x}px`}>
            <div className={styles.wrapper}>
                <ul>
                    <li>Unsort</li>
                    <li>Sort by ASC<span/></li>
                    <li>Sort by DESC<span/></li>
                    <li>Hide<span/></li>
                    <li>Show columns<span/></li>
                </ul>
            </div>
        </Portal>
    );
};

export default ColumnMenu;