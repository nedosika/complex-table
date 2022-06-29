import React from 'react';
import styles from "./CheckBoxSelection.module.scss";

const CheckBoxSelection = ({isChecked, toggle}) => {
    return (
        <div className={styles.root} onClick={toggle}>
            <span>
                <input type="checkbox" checked={isChecked}/>
            </span>
        </div>
    );
};

export default CheckBoxSelection;