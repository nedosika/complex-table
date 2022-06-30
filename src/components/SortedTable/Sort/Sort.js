import React from 'react';
import styles from "./Sort.module.scss";

const SortedWrapper = ({toggle}) => {
    return (
        <div className={styles.root}>
            <button type="button" title="SortedWrapper" onClick={toggle}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                </svg>
                <span/>
            </button>
        </div>
    );
};

export default SortedWrapper;