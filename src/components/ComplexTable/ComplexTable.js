import React from 'react';

import Table from "../Table/Table";
import {compose} from "../../helpers";
import useSorting from "../SortedTable/useSorting";
import useCheckboxSelection from "../CheckedTable/useCheckboxSelection";
import useFiltering from "../FilteredTable";

const ComplexTable = (props) =>
    <Table {...compose(
        useFiltering,
        useCheckboxSelection,
        useSorting
    )(props)}
    />

export default ComplexTable;