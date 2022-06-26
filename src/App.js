import React from "react";

import ComplexTable from "./components/ComplexTable"

import styles from "./App.module.scss";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        width: 160
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, fullName: 'test' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: 'test' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: 'test' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, fullName: 'test' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: 'test' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, fullName: 'test' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: 'test' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: 'test' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: 'test' },
];

function App() {
  return (
    <div className={styles.root}>
      <ComplexTable
          columns={columns}
          rows={rows}
          checkboxSelection
          pagination
          getRowId={(row) => row.id}
      />
    </div>
  );
}

export default App;
