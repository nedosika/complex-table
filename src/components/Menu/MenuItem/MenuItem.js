import React from 'react';
import "./MenuItem.module.scss";

const MenuItem = ({onClick, children}) => {
    return (
        <li onClick={onClick}>
            {children}
        </li>
    );
};

export default MenuItem;