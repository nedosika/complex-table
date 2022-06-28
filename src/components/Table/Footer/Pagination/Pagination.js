import React from 'react';
import styles from "./Pagination.module.scss";

const Pagination = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <p>Rows per page:</p>
                <div className={styles.select}>
                    <div className={styles.rowCount}>100</div>
                    <input value="100"/>
                    <svg focusable="false" viewBox="0 0 24 24">
                        <path d="M7 10l5 5 5-5z"/>
                    </svg>
                </div>
                <p>1–100 of 100</p>
                <div className={styles.actions}>
                    <button type="button" disabled="" title="Go to previous page">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        </svg>
                    </button>
                    <button tabIndex="-1" type="button" disabled="" title="Go to next page">
                        <svg focusable="false" viewBox="0 0 24 24">
                            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;