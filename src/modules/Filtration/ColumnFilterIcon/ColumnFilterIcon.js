import React from 'react';
import styles from "./ColumnFilterIcon.module.scss";
import filterIcon from "./filterIcon.svg"

const ColumnFilterIcon = ({icon, onClick}) => {
    return (
        <div className={styles.root} onClick={onClick}>
            <button type="button" title="Filter">
                <img src={icon ? icon : filterIcon} alt='menuIcon'/>
                <span/>
            </button>
        </div>
    );
};

export default ColumnFilterIcon;