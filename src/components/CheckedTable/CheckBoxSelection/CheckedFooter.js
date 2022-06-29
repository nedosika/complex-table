import React from 'react';
import TableFooter from "../../Table/Footer";
import RowCounter from "../../Table/Footer/RowCounter";

const CheckedFooter = ({isShow, checked, ...props}) =>
    <TableFooter {...props}>
        {
            isShow &&
            <RowCounter>
                {checked.length} row{checked.length > 1 && 's'} selected
            </RowCounter>
        }
    </TableFooter>

export default CheckedFooter;