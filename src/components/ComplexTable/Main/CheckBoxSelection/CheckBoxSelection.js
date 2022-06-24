import React from 'react';
import styles from "./CheckBoxSelection.module.scss";

const CheckBoxSelection = ({isChecked, setChecked}) => {
    return (
        <div className={styles.root}>
            <span>
                <input type="checkbox" checked={isChecked} onChange={setChecked}/>
            </span>
        </div>
    );
};

export default CheckBoxSelection;