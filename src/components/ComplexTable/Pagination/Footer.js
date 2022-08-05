import React, {useEffect} from 'react';
import {useTableProps} from "../useComplexTableContext";
import {useSelection} from "../Selection/SelectionProvider";
import Pagination from "../../Pagination";
import usePagination from "../../Pagination/usePagination";

const PaginationFooter = (props) => {
    const {rows, tableRows, setTableRows, columns, components: {Footer, RowCounter}} = useTableProps();
    const {selected} = useSelection();
    const { nextPage, prevPage, fromRow, rowCount, changeRowCount } =
      usePagination(rows);

    // useEffect(() => {
    //   setRows([...rows].splice(fromRow - 1, rowCount));
    // }, [rowCount, fromRow]);

    return (
        <Footer colSpan={columns.length + 1} {...props}>
            <RowCounter>
                {selected.length} row{selected.length > 1 && "s"} selected
            </RowCounter>
            <Pagination
                onNext={nextPage}
                onPrev={prevPage}
                fromRow={fromRow}
                rowCount={rowCount}
                rowsCount={tableRows.length}
                changeRowCount={changeRowCount}
            />
        </Footer>
    );
};

export default PaginationFooter;