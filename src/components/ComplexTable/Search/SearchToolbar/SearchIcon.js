import React from 'react';
import Icon, {ICON_TYPE_NAMES} from "../../../Icon/Icon";

const SearchIcon = (props) =>
    <Icon type={ICON_TYPE_NAMES.search} viewBox = "0 0 25 25" width={25} height={25} {...props}/>

export default SearchIcon;