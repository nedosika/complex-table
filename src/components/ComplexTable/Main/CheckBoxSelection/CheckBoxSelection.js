import React from 'react';
import styles from "./CheckBoxSelection.module.scss";

const CheckBoxSelection = ({children}) => {
    return (
        <div className={styles.root}>
            <span>
                <input type="checkbox"/>
            </span>
        </div>
    );
};

export default CheckBoxSelection;