import React from 'react';
import styles from "./ColumnFilterIcon.module.scss";
import filterIcon from "./filterIcon.svg"

const ColumnFilterIcon = ({icon}) => {
    return (
        <div className={styles.root}>
            <button type="button" title="Filter">
                <img src={filterIcon} alt='menuIcon'/>
                <span/>
            </button>
        </div>
    );
};

export default ColumnFilterIcon;