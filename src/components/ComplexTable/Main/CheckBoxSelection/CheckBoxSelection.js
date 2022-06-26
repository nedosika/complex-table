import React from 'react';
import styles from "./CheckBoxSelection.module.scss";

const CheckBoxSelection = ({isChecked, toggle}) => {
    return (
        <div className={styles.root}>
            <span>
                <input type="checkbox" checked={isChecked} onChange={toggle}/>
            </span>
        </div>
    );
};

export default CheckBoxSelection;