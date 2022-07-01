import React from 'react';
import styles from "./Sort.module.scss";
import {SORT_DIRECTIONS} from "../SortedWrapper";

const Sort = ({toggle, direction}) =>
        <div className={styles.root}>
            <button type="button" title="SortedWrapper" onClick={toggle}>
                <svg focusable="false" viewBox="0 0 24 24">
                    {
                        direction === SORT_DIRECTIONS.UP
                            ? <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
                            : <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                    }
                </svg>
                <span/>
            </button>
        </div>

export default Sort;