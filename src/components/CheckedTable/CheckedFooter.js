import TableFooter from "../Table/Footer";
import RowCounter from "../Table/Footer/RowCounter";
import React from "react";

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