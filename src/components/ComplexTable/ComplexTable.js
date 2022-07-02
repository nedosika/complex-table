import React from 'react';

import Table from "../Table/Table";
import compose from "../../helpers/compose";
import useSorting from "../SortedTable/useSorting";
import useCheckboxSelection from "../CheckedTable/useCheckboxSelection";

const ComplexTable = (props) =>
        <Table {...compose(useCheckboxSelection, useSorting)(props)} />

export default ComplexTable;