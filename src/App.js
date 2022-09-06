import React, { useCallback, useEffect, useState } from "react";

import styles from "./App.module.scss";

import ComplexTable from "./components/ComplexTable";

import EditIcon from "./components/ComplexTable/modules/Search/SearchToolbar/EditIcon";
import DeleteIcon from "./components/ComplexTable/modules/Search/SearchToolbar/DeleteIcon";
import IconButton from "./components/IconButton";
import { COLORS } from "./components/ComplexTable/modules/Selection/SelectionButton/SelectionButton";
import Row from "./components/Table/Main/Row";
import {LinearProgress} from "@mui/material";

const initialRows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    fullName: "test",
    accordion: [
      {
        id: 1,
        lastName: "Lannister",
        firstName: "Cersei",
        fullName: "test",
        age: 33,
      },
      {
        id: 2,
        lastName: "Lannister",
        firstName: "Jaime",
        age: 45,
        fullName: "test",
      },
    ],
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    // fullName: "test",
    // age: 33,
    //colspan: ["firstName", 3],
    colspan: {
      lastName: 3,
    },
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    // age: 45,
    // fullName: "test",
    colspan: {
      firstName: 3,
    },
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
  const [rows, setRows] = useState(initialRows);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteRow = (id) => (event) => {
    event.stopPropagation();
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };
  const handleDeleteRows = (rows) =>
    setRows((prevRows) => prevRows.filter((row) => !rows.includes(row.id)));

  const fetchRows = () => {
    setIsLoading(true)
  };

  useEffect(() => {
    isLoading &&
      setTimeout(() => {
        addRows(initialRows.map((row) => ({ ...row, id: Math.random() })));
        setIsLoading(false);
      }, 3000);
  }, [isLoading]);

  // const fetchRows = useCallback(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     addRows(initialRows.map((row) => ({ ...row, id: Math.random() })));
  //     setIsLoading(false);
  //   }, 3000);
  // }, [isLoading, rows]);

  const addRows = (rows) => setRows((prevRows) => [...prevRows, ...rows]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 105,
      sortable: false,
      searchable: true,
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 200,
      sortable: true,
      searchable: true,
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
      sortable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      description: "This column has a value getter and is not sortable.",
      width: 160,
      getActions: (id) => {
        return [
          <IconButton
            title="Edit"
            icon={<EditIcon color={COLORS.primary} />}
            hint={"Edit"}
            key="edit"
          />,
          <IconButton
            title="Delete"
            icon={<DeleteIcon color={COLORS.primary} />}
            hint={"Delete"}
            onClick={handleDeleteRow(id)}
            key="delete"
          />,
        ];
      },
    },
  ];

  return (
    <div className={styles.root}>
      <ComplexTable
        columns={columns}
        rows={rows}
        checkboxSelection={true}
        getRowHeight={() => 52}
        pageSize={5}
        rowsPerPageOptions={[2, 5, 10]}
        page={0}
        onDeleteRows={handleDeleteRows}
        onRowsScrollEnd={fetchRows}
        loading={isLoading}
        //pagination
        components={
          {
            //Table: () => 'table',
            //Header: () => 'header'
            // Row: React.forwardRef((props, ref) => (
            //   <Row
            //     {...props}
            //     ref={ref}
            //     style={props.row?.age > 10 ? { backgroundColor: "red" } : {}}
            //   />
            // )),
          }
        }
      />
    </div>
  );
}

export default App;
