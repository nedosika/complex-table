import React from 'react';
import styles from "./ColumnMenuIcon.module.scss";
import menuIcon from "./menu.svg"

const ColumnMenuIcon = ({icon, onClick}) => {
    return (
        <div className={styles.root} onClick={onClick}>
            <button type="button" title="Menu">
                <img src={icon ? icon : menuIcon} alt='menuIcon'/>
                <span/>
            </button>
        </div>
    );
};

export default ColumnMenuIcon;