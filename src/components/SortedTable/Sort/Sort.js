import React, {useState} from 'react';
import styles from "./Sort.module.scss";

const Sort = ({toggle}) => {
    const [reverse, setReverse] = useState(false);

    const handleClick = () => {
        toggle(reverse);
        setReverse((reverse) => !reverse)
    }

    return (
        <div className={styles.root}>
            <button type="button" title="SortedWrapper" onClick={handleClick}>
                <svg focusable="false" viewBox="0 0 24 24">
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                </svg>
                <span/>
            </button>
        </div>
    );
};

export default Sort;