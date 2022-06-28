import React from 'react';
import Row from "../Table/Main/Row/TableRow";
import CheckBoxSelection from "./CheckBoxSelection";

const CheckedRow = ({isChecked, toggle, isShow, row, ...props}) =>
    <Row {...props}>
        {
            isShow &&
            <CheckBoxSelection isChecked={isChecked(row)} toggle={() => toggle(row)}/>
        }
    </Row>

export default CheckedRow;