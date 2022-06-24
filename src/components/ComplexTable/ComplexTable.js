import React, {useState} from 'react';

import TableMain from "./Main";
import TableFooter from "./Footer";

import styles from "./ComplexTable.module.scss";

const ComplexTable = ({components: {Toolbar = null}, columns = [], rows = []}) => {
    const [checked, setChecked] = useState(new Array(rows.length).fill(false));

    console.log(checked)

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                {Toolbar && <Toolbar/>}
                <TableMain columns={columns} rows={rows} checked={checked} setChecked={setChecked}/>
                <TableFooter/>
            </div>
        </div>
    )
}

export default ComplexTable;