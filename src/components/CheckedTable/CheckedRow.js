import React from 'react';
import Row from "../Table/Main/Row/TableRow";
import CheckBoxSelection from "./CheckBoxSelection";
import TableCell from "../Table/Main/Cell";

const CheckedRow = ({isChecked, toggle, selectOne, isShow, row, ...props}) =>
        <Row
            {...props}
            sx={
                isChecked(row) &&
                {
                    backgroundColor: 'rgba(25, 118, 210, 0.08)'
                }
            }
            renderItem={(cell) =>
                <TableCell width={cell.width}>{row[cell.field]}</TableCell>
            }
            onClick={() => selectOne(row)}
        >
            {
                isShow &&
                <CheckBoxSelection isChecked={isChecked(row)} toggle={(event) => {
                    event.stopPropagation()
                    toggle(row)
                }}/>
            }
        </Row>

export default CheckedRow;