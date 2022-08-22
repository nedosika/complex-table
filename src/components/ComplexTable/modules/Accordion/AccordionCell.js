import React from 'react';
import Icon from "../../../Icon";
import {ICON_TYPE_NAMES} from "../../../Icon/Icon";
import {useTableContext} from "../../../Table/useTableContext";

const AccordionCell = ({isShow, isMore, toggle}) => {
    const {
        components: { Cell },
    } = useTableContext();
    return (
        <Cell style={{ cursor: "pointer" }} onClick={toggle}>
            {isShow &&
            (isMore ? (
                <Icon
                    type={[ICON_TYPE_NAMES.expandLess]}
                    width={30}
                    height={30}
                    color="grey"
                />
            ) : (
                <Icon
                    type={[ICON_TYPE_NAMES.expandMore]}
                    width={30}
                    height={30}
                    color="grey"
                />
            ))}
        </Cell>
    );
};

export default AccordionCell;