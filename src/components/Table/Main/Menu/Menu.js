import React from 'react';
import styles from "./Menu.module.scss";

const Menu = () => {
    return (
        <div className={styles.root}>
            <button type="button" title="Menu">
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span/>
            </button>
        </div>
    );
};

export default Menu;