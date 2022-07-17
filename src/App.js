import React, { useState } from "react";

import styles from "./App.module.scss";

import ComplexTable from "./contexts/ComplexTable";
import ColumnFilterIcon from "./modules/Filtration/ColumnFilterIcon";
import Toolbar from "./components/Table/Toolbar";
import Button from "./components/Button";
import { useTableProps } from "./contexts/ComplexTable/ComplexTable";
import GridToolbar from "./components/GtidToolbar/GridToolbar";

const columns = [
  { field: "id", headerName: "ID", width: 105, sortable: true },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    sortable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    width: 160,
    sortable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, fullName: "test" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    fullName: "test",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    fullName: "test",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, fullName: "test" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: "",
    fullName: "test",
  },
  { id: 6, lastName: "Melisandre", firstName: "", age: 150, fullName: "test" },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    fullName: "test",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    fullName: "test",
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, fullName: "test" },
];

function App() {
  return (
    <div className={styles.root}>
      <ComplexTable
        columns={columns}
        rows={rows}
        checkboxSelection
        //getRowId={(row) => row.id}
        //disableColumnMenu={false}
        //disableColumnFilter={false}
        components={{
          //ColumnMenuIcon: ColumnFilterIcon
          Toolbar: GridToolbar,
        }}
        //:Todo
        // pageSize={pageSize}
        // onPageSizeChange={(newPage) => setPageSize(newPage)}
        // pagination
        // rowsPerPageOptions={[5]}
        // page={page}
        // onPageChange={(newPage) => setPage(newPage)}
        // onMenuClose={() => {console.log('Close')}}
        // onMenuOpen={() => {console.log('Open')}}
        // hideFooter={false}
        // hideFooterPagination={false}
        // hideFooterSelectedRowCount={false}
        // headerHeight={56}
        // disableSelectionOnClick={false}
        // isRowSelectable={(params: GridRowParams) => params.row.quantity > 50000}
      />
    </div>
  );
}

export default App;
