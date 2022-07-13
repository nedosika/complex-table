import React from 'react';
import styles from "./CheckBox.module.scss";

const CheckBox = ({isChecked, toggle}) => {
    return (
        <div className={styles.root} onClick={toggle}>
            <span>
                <input type="checkbox" defaultChecked={isChecked}/>
            </span>
        </div>
    );
};

export default CheckBox;