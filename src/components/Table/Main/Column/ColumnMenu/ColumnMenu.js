import React from 'react';
import styles from "./ColumnMenu.module.scss";
import menuIcon from "./menu.svg"

const ColumnMenu = ({icon}) => {
    return (
        <div className={styles.root}>
            <button type="button" title="Filter">
                <img src={icon ? icon : menuIcon} alt='menuIcon'/>
                <span/>
            </button>
        </div>
    );
};

export default ColumnMenu;