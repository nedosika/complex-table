import React from 'react';
import Row from "../Table/Main/Row/TableRow";
import CheckBoxSelection from "./CheckBoxSelection";

const CheckedRow = ({isChecked, toggle, isShow, row, ...props}) =>
    <Row
        {...props}
        sx={isChecked(row) &&
            {
                backgroundColor: 'rgba(25, 118, 210, 0.08)'
            }
        }
    >
        {
            isShow &&
            <CheckBoxSelection isChecked={isChecked(row)} toggle={() => toggle(row)}/>
        }
    </Row>

export default CheckedRow;