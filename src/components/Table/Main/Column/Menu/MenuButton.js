import React from 'react';
import styles from "./MenuButton.module.scss";
import menuIcon from "./menu.svg"

const Menu = ({icon}) => {
    return (
        <div className={styles.root}>
            <button type="button" title="Filter">
                <img src={icon ? icon : menuIcon} alt='menuIcon'/>
                <span/>
            </button>
        </div>
    );
};

export default Menu;