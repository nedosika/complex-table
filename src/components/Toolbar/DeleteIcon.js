import React from 'react';
import Icon from "../Icon";
import {ICON_TYPE_NAMES} from "../Icon/Icon";

const DeleteIcon = (props) =>
    <Icon type={ICON_TYPE_NAMES.delete} height={18} {...props}/>

export default DeleteIcon;