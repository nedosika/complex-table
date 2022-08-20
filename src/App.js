import React from "react";

import styles from "./App.module.scss";

import ComplexTable from "./components/ComplexTable";
import {SEARCHING_CONFIG} from "./components/ComplexTable/modules/Search/useTableSearch";
import {SORTING_CONFIG} from "./components/ComplexTable/modules/Sorting/useSorting";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 105,
    [SORTING_CONFIG.sortable]: false,
    [SEARCHING_CONFIG.searchable]: true,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 200,
    [SORTING_CONFIG.sortable]: true,
    [SEARCHING_CONFIG.searchable]: true,
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
    [SORTING_CONFIG.sortable]: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    width: 160
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, fullName: "test" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    fullName: "test",
    age: 33,
    //colspan: ["firstName", 3],
    // colspan: {
    //   lastName: 3
    // }
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    fullName: "test",
    // colspan: {
    //   firstName: 3
    // }
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    fullName: "test",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: "",
    fullName: "test",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: "",
    age: 150,
    fullName: "test",
  },
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
        getRowHeight={() => 52}
        pageSize={5}
        rowsPerPageOptions={[2, 5, 10]}
        page={0}
        components={{
          //Table: () => 'table',
          //Header: () => 'header'
        }}
      />
    </div>
  );
}

export default App;
